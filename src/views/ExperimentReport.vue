<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mb-4">
          <v-card-title class="text-h5">
            実験レポート作成
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="saveReport" :loading="saving">
              保存
            </v-btn>

          </v-card-title>


          <v-card-text>
            <v-row>
              <!-- 左側：実験データ参照パネル -->
              <v-col cols="12" md="4">
                <v-card variant="outlined">
                  <v-card-title class="text-h6">実験データ</v-card-title>
                  <v-card-text>
                    <div class="mb-4">
                      <strong>実験タイトル:</strong> {{ experimentData.title }}
                    </div>
                    <div class="mb-4">
                      <strong>実施日:</strong> {{ experimentData.date }}
                    </div>
                    <div class="mb-4">
                      <strong>実験目的:</strong>
                      <p>{{ experimentData.objective }}</p>
                    </div>
                    <div class="mb-4">
                      <strong>実験手順:</strong>
                      <v-list density="compact">
                        <v-list-item v-for="step in experimentData.steps" :key="step.stepId">
                          <template v-slot:title>
                            Step {{ step.stepId }}
                          </template>
                          <template v-slot:subtitle>
                            {{ step.description }}
                          </template>
                        </v-list-item>
                      </v-list>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>

              <!-- 右側：レポート作成フォーム -->
              <v-col cols="12" md="8">
                <v-form ref="form">
                  <v-text-field v-model="report.title" label="レポートタイトル" required class="mb-4"></v-text-field>

                  <v-tabs v-model="activeTab" class="mb-4">
                    <v-tab value="abstract">要約</v-tab>
                    <v-tab value="method">実験方法</v-tab>
                    <v-tab value="result">実験結果</v-tab>
                    <v-tab value="discussion">考察</v-tab>
                  </v-tabs>

                  <v-window v-model="activeTab">
                    <v-window-item value="abstract">
                      <v-textarea v-model="report.abstract" label="要約" rows="6" hint="実験の目的、方法、結果、結論を簡潔に記述してください"
                        persistent-hint></v-textarea>
                    </v-window-item>

                    <v-window-item value="method">
                      <v-textarea v-model="report.method" label="実験方法" rows="10" hint="使用した機器、材料、手順を詳細に記述してください"
                        persistent-hint></v-textarea>
                    </v-window-item>

                    <v-window-item value="result">
                      <v-textarea v-model="report.result" label="実験結果" rows="10" hint="測定値、観察結果、データ分析結果を記述してください"
                        persistent-hint></v-textarea>

                      <v-file-input v-model="resultFiles" label="結果の図表を添付" multiple accept="image/*"
                        prepend-icon="mdi-camera" class="mt-4" @change="handleFileUpload"></v-file-input>

                      <div v-if="report.figures.length > 0" class="mt-4">
                        <div v-for="(figure, index) in report.figures" :key="index" class="mb-2">
                          <v-img :src="figure.url" max-height="200"></v-img>
                          <v-text-field v-model="figure.caption" :label="`図${index + 1}のキャプション`" dense></v-text-field>
                        </div>
                      </div>
                    </v-window-item>

                    <v-window-item value="discussion">
                      <v-textarea v-model="report.discussion" label="考察" rows="10" hint="結果の解釈、課題、今後の展望について記述してください"
                        persistent-hint></v-textarea>
                    </v-window-item>
                  </v-window>
                </v-form>
                <!-- Gemini リクエストエリア -->
                <v-btn :disabled="method" color="primary" @click="showEditor = showEditor">
                  AIでまとめる
                </v-btn>

                <ExperimentEditor v-if="showEditor" :experiment-data="generatedData" @saved="handleSaved" />

                <ExperimentEditor v-model="showEditor" :experiment-data="generatedData" @saved="handleSaved" />

              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-btn class="floating-btn" color="primary" icon="mdi-home" size="x-large" @click="returnDashboard"></v-btn>

</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { doc, getDoc, setDoc, getFirestore } from 'firebase/firestore'
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'

const { GoogleGenerativeAI } = require("@google/generative-ai");

export default {
  name: 'ExperimentReport',
  props: {
    experimentData: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const showEditor = ref(false)
    const route = useRoute()
    const router = useRouter()
    const form = ref(null)
    const activeTab = ref('abstract')
    const saving = ref(false)
    const resultFiles = ref([])
    let generatedData = null

    const toggleEditor = () => {
      showEditor.value = !showEditor.value;  // `this`は不要
    }

    const report = ref({
      title: '',
      abstract: '',
      method: '',
      result: '',
      discussion: '',
      figures: [],
      experimentId: route.params.id,
      createdAt: null,
      updatedAt: null
    })

    // 下書きがあれば読み込む
    onMounted(async () => {
      const db = getFirestore()
      const reportRef = doc(db, 'reports', route.params.id)
      const reportDoc = await getDoc(reportRef)

      if (reportDoc.exists()) {
        const data = reportDoc.data()
        report.value = { ...report.value, ...data }
      }
    })

    const handleFileUpload = async (files) => {
      if (!files) return

      const storage = getStorage()

      for (const file of files) {
        const fileRef = storageRef(storage, `reports/${route.params.id}/${file.name}`)
        await uploadBytes(fileRef, file)
        const url = await getDownloadURL(fileRef)

        report.value.figures.push({
          url,
          caption: '',
          filename: file.name
        })
      }
    }

    const saveReport = async () => {
      try {
        saving.value = true
        const db = getFirestore()
        const reportRef = doc(db, 'reports', route.params.id)

        const now = new Date()
        report.value.updatedAt = now
        if (!report.value.createdAt) {
          report.value.createdAt = now
        }

        await setDoc(reportRef, report.value)
        saving.value = false

        // 保存成功のスナックバーまたはアラートを表示
        alert('レポートを保存しました')
      } catch (error) {
        console.error('Error saving report:', error)
        alert('保存中にエラーが発生しました')
        saving.value = false
      }
    }

    const returnDashboard = () => {
      router.push('/dashboard')
    }

    const processWithGemini = async () => {
      console.log(props.experimentData)
      const combinedText = props.experimentData
      console.log(combinedText)
      if (!combinedText) {
        console.log('No text to process')
        return
      }

      // Gemini APIにリクエストを送信
      const genAI = new GoogleGenerativeAI(process.env.VUE_APP_GEMINI_API_KEY)
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      console.log(model)
      const prompt = `
      outpu JSON only(without writing \`\`\`json)
    実験をしています．つぎのデータ簡単にまとめ，それを基に，以下のJSON Schemaのような形式でまとめて出力してください.文章に余計な空白は含めないでください.JSONは{からはじめて\`などは含まないでください.データは画像認識で文字起こしされたものであり，変な場合があるので，補正ができるならば考慮.
    ${props.experimentData}
    ${report.value}
    {
      "title":'' ,
      "abstract": ,
      "method": '',
      "result": '',
      "discussion": '',
      "figures": [],
      "experimentId":,
      "createdAt": null,
      "updatedAt": null
    }`

      try {
        const result = await model.generateContent(prompt)
        const response = result.response
        const jsonText = response.text()
        console.log(jsonText, typeof (jsonText))
        try {
          const parsedData = JSON.parse(jsonText)
          console.log(parsedData)
          // 生成したデータを保持
          // generatedData = parsedData
          generatedData = props.experimentData.value
          // エディタを表示
          // this.toggleEditor()
          toggleEditor()
        } catch (parseError) {
          console.error('JSON parsing error:', parseError)
          alert('データの形式が不正です。もう一度お試しください。')
        }
      } catch (error) {
        console.error('API error:', error)
        alert('データの生成中にエラーが発生しました。')
      }
    }

    const handleSaved = () => {
      // 保存完了後の処理
      showEditor.value = false
      generatedData.value = null
      router.push('/dashboard')
      // 必要に応じて他のリセット処理を追加
    }

    return {
      showEditor,
      generatedData,
      toggleEditor,
      props,
      form,
      report,
      activeTab,
      saving,
      resultFiles,
      handleFileUpload,
      saveReport,
      returnDashboard,
      processWithGemini,
      handleSaved
    }
  }
}
</script>

<style scoped>
.v-card-text {
  height: calc(100vh - 200px);
  overflow-y: auto;
}

.floating-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
}
</style>
