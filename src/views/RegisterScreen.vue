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
              <v-expansion-panels v-if="valid">
                <v-btn color="primary" @click="processWithGemini()">
                  AIでまとめる
                </v-btn>
              </v-expansion-panels>

              <!-- 実施予定日設定 -->
              <v-row class="mt-4">
                <v-col cols="12" sm="6">
                  <v-date-picker v-model="experimentData.scheduledDate" label="実施予定日"></v-date-picker>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-checkbox v-model="experimentData.notificationEnabled" label="事前通知を受け取る"></v-checkbox>
                </v-col>
              </v-row>

              <v-btn color="primary" :disabled="!valid || ocrProcessing" @click="submitData" :loading="loading"
                class="mt-4">
                登録する
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, reactive } from 'vue'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { createWorker } from 'tesseract.js'
const { GoogleGenerativeAI } = require("@google/generative-ai");

export default {
  name: 'RegisterScreen',
  setup() {
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
      submitData
    }
  },
  methods: {
    // Gemini APIで処理
    async processWithGemini() {
      const combinedText = this.experimentData

      if (!combinedText) {
        console.log('No text to process')
        return
      }
      // Gemini APIにリクエストを送信
      const genAI = new GoogleGenerativeAI(process.env.VUE_APP_GEMINI_API_KEY)
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      console.log(model)
    }
  }
}
</script>

<style scoped>
.v-expansion-panels {
  margin-top: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
