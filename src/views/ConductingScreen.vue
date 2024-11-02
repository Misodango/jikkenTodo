<template>
  <div class="max-w-4xl mx-auto p-6">
    <!-- ヘッダー情報 -->
    <v-card class="mb-6">
      <v-card-title class="text-h5">
        {{ experiment.title }}
        <div class="text-subtitle-2">実施予定日: {{ experiment.date }}</div>
      </v-card-title>
      <v-card-text>
        <div class="mb-4">
          <h3 class="font-weight-bold mb-2">実験の目的:</h3>
          <p>{{ experiment.objective }}</p>
        </div>

        <!-- 進捗バー -->
        <div class="mb-4">
          <div class="d-flex justify-space-between mb-2">
            <span class="text-subtitle-2 font-weight-medium">進捗状況</span>
            <span class="text-subtitle-2 font-weight-medium">{{ progressPercentage }}%</span>
          </div>
          <v-progress-linear v-model="progressPercentage" color="primary" height="10"></v-progress-linear>
        </div>
      </v-card-text>
    </v-card>

    <!-- 注意事項 -->
    <v-card class="mb-6 warning-card">
      <v-card-title class="d-flex align-center">
        <v-icon color="warning" class="mr-2">mdi-alert</v-icon>
        注意事項
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-for="(precaution, index) in experiment.precautions" :key="index">
            <v-list-item-icon>
              <v-icon color="warning">mdi-alert-circle-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ precaution }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <!-- 実験ステップ -->
    <v-expansion-panels>
      <v-expansion-panel v-for="step in experiment.steps" :key="step.stepId">
        <v-expansion-panel-header>
          <div class="d-flex align-center">
            <v-checkbox v-model="step.checked" @change="updateProgress" @click.stop class="mr-2"></v-checkbox>
            <div>
              <div class="font-weight-bold">Step {{ step.stepId }}</div>
              <div class="text-subtitle-2">{{ step.description }}</div>
            </div>
          </div>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <!-- 材料リスト -->
          <v-card flat v-if="step.materials && step.materials.length">
            <v-card-title class="text-subtitle-1 font-weight-bold">
              必要な器具・材料:
            </v-card-title>
            <v-card-text>
              <v-list dense>
                <v-list-item v-for="(material, index) in step.materials" :key="index">
                  <v-list-item-icon>
                    <v-icon>mdi-flask</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ material }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>

          <!-- サブステップ -->
          <div v-if="step.subSteps" class="mt-4">
            <v-card flat>
              <v-card-title class="text-subtitle-1 font-weight-bold">
                詳細手順:
              </v-card-title>
              <v-card-text>
                <v-list dense>
                  <v-list-item v-for="subStep in step.subSteps" :key="subStep.stepId">
                    <v-list-item-icon>
                      <v-checkbox v-model="subStep.checked" @change="updateProgress"></v-checkbox>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{ subStep.stepId }}: {{ subStep.description }}</v-list-item-title>
                      <v-list-item-subtitle v-if="subStep.notes" class="mt-1">
                        Note: {{ subStep.notes }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </div>

          <!-- ノート -->
          <v-card flat v-if="step.notes" class="mt-4">
            <v-card-title class="text-subtitle-1 font-weight-bold">
              注意点:
            </v-card-title>
            <v-card-text>
              <v-alert type="info" text outlined>
                {{ step.notes }}
              </v-alert>
            </v-card-text>
          </v-card>

          <!-- 写真撮影ボタン -->
          <v-card flat class="mt-4">
            <v-card-actions>
              <v-btn color="primary" outlined @click="capturePhoto(step.stepId)">
                <v-icon left>mdi-camera</v-icon>
                写真を撮影
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- 写真プレビューダイアログ -->
    <v-dialog v-model="showPhotoDialog" max-width="500px">
      <v-card>
        <v-card-title>
          写真プレビュー
          <v-spacer></v-spacer>
          <v-btn icon @click="showPhotoDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <div v-if="selectedPhoto" class="text-center">
            <img :src="selectedPhoto.photoUrl" class="max-width-100" :alt="selectedPhoto.name">
            <div class="mt-2">{{ selectedPhoto.name }}</div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { db } from '../firebase/init'
import { doc, updateDoc, getDoc } from 'firebase/firestore'

export default {
  name: 'ExperimentViewer',

  data() {
    return {
      experiment: {
        title: '',
        objective: '',
        date: '',
        steps: [],
        precautions: [],
        equipmentPhotos: [],
        id : ""
      },
      progressPercentage: 0,
      showPhotoDialog: false,
      selectedPhoto: null
    }
  },

  async mounted() {
    await this.loadExperiment()
    this.updateProgress()
  },

  methods: {
    async loadExperiment() {
      this.experiment.id = this.$route.params.id
      console.log(this.experiment.id)
      try {
        const experimentRef = doc(db, 'experiments', this.experiment.id)
        const docSnap = await getDoc(experimentRef)
        if (docSnap.exists()) {
          this.experiment = { id: docSnap.id, ...docSnap.data() }
        }
      } catch (error) {
        console.error('実験データ読み込みエラー:', error)
      }
    },

    updateProgress() {
      const totalSteps = this.experiment.steps.length
      const completedSteps = this.experiment.steps.filter(step => step.checked).length
      this.progressPercentage = Math.round((completedSteps / totalSteps) * 100)

      // Firebaseに進捗を保存
      this.saveProgress()
    },

    async saveProgress() {
      try {
        const experimentRef = doc(db, 'experiments', this.experiment.id)
        await updateDoc(experimentRef, {
          steps: this.experiment.steps
        })
      } catch (error) {
        console.error('進捗保存エラー:', error)
      }
    },

    async capturePhoto(stepId) {
      // ここにカメラ機能の実装を追加
      console.log(`Step ${stepId}の写真を撮影`)
    }
  }
}
</script>

<style scoped>
.warning-card {
  background-color: #FFF3E0 !important;
}

.max-width-100 {
  max-width: 100%;
  height: auto;
}
</style>
