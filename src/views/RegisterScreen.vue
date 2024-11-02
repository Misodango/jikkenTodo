<template>
  <v-container fluid>
    <v-row class="mb-6">
      <v-col cols="12">
        <v-card class="mb-4">
          <v-card-title class="text-h5 d-flex align-center">
            <v-icon start class="me-2">mdi-file-clock-outline</v-icon>
            実験スケジュールを登録
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-text-field v-model="experimentData.purpose" label="実験の目的" required
                :rules="[v => !!v || '実験の目的は必須です']"></v-text-field>

              <v-textarea v-model="experimentData.procedure" label="実験手順" required
                :rules="[v => !!v || '実験手順は必須です']"></v-textarea>

              <v-textarea v-model="experimentData.precautions" label="注意事項"></v-textarea>

              <!-- ファイルアップロード -->
              <v-file-input v-model="files" label="写真・PDFをアップロード" accept="image/*,.pdf"
                @update:model-value="handleFileUpload" multiple show-size :loading="ocrProcessing"
                :disabled="ocrProcessing" hint="画像ファイルをアップロードしてください" persistent-hint></v-file-input>

              <ExperimentEditor v-if="showEditor" :experiment-data="generatedData" @saved="handleSaved" />

              <!-- OCR進行状況 -->
              <v-progress-linear v-if="ocrProcessing" indeterminate color="primary" class="mb-4"></v-progress-linear>

              <!-- OCRテキスト編集エリア -->
              <v-expansion-panels v-if="ocrResults.length > 0">
                <v-expansion-panel v-for="(result, index) in ocrResults" :key="index">
                  <v-expansion-panel-title>
                    文字認識結果 #{{ index + 1 }}
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <v-textarea v-model="ocrResults[index].text" label="抽出テキスト" hint="テキストを編集できます" auto-grow
                      rows="5"></v-textarea>
                    <v-btn color="primary" size="small" class="mt-2" @click="appendToProcedure(index)">
                      手順に追加
                    </v-btn>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>

              <!-- Gemini リクエストエリア -->
              <v-row class="mt-4">
                <v-btn :disabled="!valid" color="primary" @click="processWithGemini()">
                  AIでまとめる
                </v-btn>
              </v-row>

              <ExperimentEditor v-model="showEditor" :experiment-data="generatedData" @saved="handleSaved" />

            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import ExperimentEditor from './ExperimentEditor.vue'
import { ref, reactive } from 'vue'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { createWorker } from 'tesseract.js'
const { GoogleGenerativeAI } = require("@google/generative-ai");
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase/init'

export default {
  name: 'RegisterScreen',
  components: {
    ExperimentEditor
  },
  data() {
    return {
      displayName: ""
    }
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.displayName = user.displayName
      } else {
        this.displayName = ""
      }
    })

  },
  setup() {
    const showEditor = ref(false)
    const valid = ref(false)
    const loading = ref(false)
    const files = ref([])
    const ocrProcessing = ref(false)
    const ocrResults = ref([])

    const experimentData = reactive({
      purpose: '',
      procedure: '',
      precautions: '',
      scheduledDate: null,
      notificationEnabled: false
    })

    const toggleEditor = () => {
      showEditor.value = !showEditor.value;  // `this`は不要
    };
    const generatedData = ref(null)

    // OCR処理
    const handleFileUpload = async (uploadedFiles) => {
      if (!uploadedFiles || !Array.isArray(uploadedFiles) || uploadedFiles.length === 0) {
        console.log('No files selected')
        return
      }

      const imageFiles = uploadedFiles.filter(file =>
        file && file.type && file.type.startsWith('image/')
      )

      if (imageFiles.length === 0) {
        console.log('No valid image files found')
        return
      }

      ocrProcessing.value = true
      ocrResults.value = []

      try {
        const worker = await createWorker('jpn')

        for (const file of imageFiles) {
          try {
            // OCR処理のみを実行
            const ret = await worker.recognize(file)

            ocrResults.value.push({
              text: ret.data.text,
              filename: file.name
            })
          } catch (error) {
            console.error(`Error processing file ${file.name}:`, error)
            ocrResults.value.push({
              text: '',
              error: error.message,
              filename: file.name
            })
          }
        }

        await worker.terminate()


      } catch (error) {
        console.error('OCR processing failed:', error)
      } finally {
        ocrProcessing.value = false
      }
    }

    // OCR結果を実験手順に追加
    const appendToProcedure = (index) => {
      if (!ocrResults.value[index] || !ocrResults.value[index].text) return

      experimentData.procedure = experimentData.procedure
        ? `${experimentData.procedure}\n\n${ocrResults.value[index].text}`
        : ocrResults.value[index].text
      ocrResults.value = ""
    }

    // データを保存
    const submitData = async () => {
      if (!experimentData.procedure) {
        console.log('No procedure data')
        return
      }

      loading.value = true
      try {
        const db = getFirestore()

        await addDoc(collection(db, 'experiments'), {
          ...experimentData,
          generatedData: generatedData.value, // Geminiから生成されたデータ
          createdAt: new Date()
        })

        // 成功メッセージを表示
      } catch (error) {

        console.error('Data submission failed:', error)
      } finally {
        loading.value = false
      }
    }

    const handleSaved = () => {
      // 保存完了後の処理
      showEditor.value = false
      generatedData.value = null
      // 必要に応じて他のリセット処理を追加
    }

    return {
      valid,
      loading,
      files,
      ocrProcessing,
      ocrResults,
      experimentData,
      generatedData,
      handleFileUpload,
      appendToProcedure,
      submitData,
      showEditor,
      handleSaved,
      toggleEditor
    }
  },
  methods: {
    // Gemini APIで処理
    async processWithGemini() {
      const combinedText = this.experimentData
      console.log(combinedText)
      if (!combinedText) {
        console.log('No text to process')
        return
      }

      // Gemini APIにリクエストを送信
      const genAI = new GoogleGenerativeAI(process.env.VUE_APP_GEMINI_API_KEY)
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      console.log(model)
      const experimentId = 12345
      const prompt = `
      outpu JSON only(without writing \`\`\`json)
    実験をしています．つぎのデータ簡単にまとめ，それを基に，以下のJSON Schemaのような形式でまとめて出力してください.文章に余計な空白は含めないでください.JSONは{からはじめて\`などは含まないでください.データは画像認識で文字起こしされたものであり，変な場合があるので，補正ができるならば考慮.

    ${combinedText.purpose},${combinedText.procedure},${combinedText.precautions}
    {
      "experimentId": "${experimentId}",
      "userId": "${this.displayName}",
      "title": "",
      "objective": "",
        "date": "${this.experimentData.scheduledDate}",
      "steps": [
        {
          "stepId": "1",
          "description": "",
          "materials": ["", "", ""],
          "checked": false,
          "notes": "",
          "subSteps": [
            {
              "stepId": "1.1",
              "description": "",
              "checked": false,
              "notes": ""
            }
          ]
        },
        {
          "stepId": "2",
          "description": "",
          "materials": [""],
          "checked": false,
          "notes": ""
        },
        {
          "stepId": "3",
          "description": "",
          "materials": [""],
          "checked": false,
          "notes": ""
        }
      ],
      "precautions": [
        "",
        ""
      ],
      "equipmentPhotos": [
        {
          "name": "",
          "photoUrl": ""
        }
      ]
    }`

      try {
        const result = await model.generateContent(prompt)
        const response = result.response
        const jsonText = response.text()
        console.log(jsonText, typeof (jsonText))
        try {
          const parsedData = JSON.parse(jsonText)
          // 生成したデータを保持
          this.generatedData = parsedData
          // エディタを表示
          // this.toggleEditor()
          this.showEditor = true
          console.log(this.showEditor)

        } catch (parseError) {
          console.error('JSON parsing error:', parseError)
          alert('データの形式が不正です。もう一度お試しください。')
        }
      } catch (error) {
        console.error('API error:', error)
        alert('データの生成中にエラーが発生しました。')
      }
    }
  },

}
</script>

<style scoped>
.v-expansion-panels {
  margin-top: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
