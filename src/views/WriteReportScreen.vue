<template>
  <v-container>
    <!-- ローディング表示 -->
    <v-row v-if="loading" justify="center" align="center" style="height: 80vh;">
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
        <div class="mt-4">実験データを読み込んでいます...</div>
      </v-col>
    </v-row>

    <!-- エラー表示 -->
    <v-row v-else-if="error" justify="center" align="center" style="height: 80vh;">
      <v-col cols="12" class="text-center">
        <v-alert type="error" title="エラーが発生しました">
          {{ error }}
          <template v-slot:append>
            <v-btn color="error" @click="loadExperiment">再試行</v-btn>
          </template>
        </v-alert>
      </v-col>
    </v-row>

    <!-- 実験データが存在しない場合 -->
    <v-row v-else-if="!experimentData" justify="center" align="center" style="height: 80vh;">
      <v-col cols="12" class="text-center">
        <v-alert type="warning" title="実験データが見つかりません">
          指定された実験データが見つかりませんでした。
          <template v-slot:append>
            <v-btn color="primary" @click="goBack">戻る</v-btn>
          </template>
        </v-alert>
      </v-col>
    </v-row>

    <!-- ExperimentReport コンポーネントの表示 -->
    <template v-else>
      <v-row class="mb-4">
        <v-col cols="12">
          <v-btn icon="mdi-arrow-left" variant="text" @click="goBack"></v-btn>
          <span class="text-h5 ml-2">レポート作成</span>
        </v-col>
      </v-row>

      <ExperimentReport :experiment-data="experimentData" @saved="handleReportSaved" />
    </template>

    <!-- 保存成功時のスナックバー -->
    <v-snackbar v-model="showSuccessSnackbar" color="success" timeout="3000">
      レポートを保存しました
    </v-snackbar>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ExperimentReport from './ExperimentReport.vue'

export default {
  name: 'WriteReportScreen',

  components: {
    ExperimentReport
  },

  setup() {
    const route = useRoute()
    const router = useRouter()
    const experimentData = ref(null)
    const loading = ref(true)
    const error = ref(null)
    const showSuccessSnackbar = ref(false)

    const loadExperiment = async () => {
      loading.value = true
      error.value = null

      try {
        const experimentId = route.params.id
        if (!experimentId) {
          throw new Error('実験IDが指定されていません')
        }

        const db = getFirestore()
        const experimentRef = doc(db, 'experiments', experimentId)
        const experimentDoc = await getDoc(experimentRef)

        if (!experimentDoc.exists()) {
          throw new Error('実験データが見つかりません')
        }

        experimentData.value = {
          id: experimentDoc.id,
          ...experimentDoc.data()
        }
      } catch (e) {
        // console.error('実験データの読み込みエラー:', e)
        error.value = e.message || '実験データの読み込み中にエラーが発生しました'

        // エラーが発生した場合は一覧画面に戻る
        router.push(`/experiment/${route.params.id}`)
      } finally {
        loading.value = false
      }
    }

    const goBack = () => {
      router.push(`/experiment/${route.params.id}`)
    }

    const handleReportSaved = () => {
      showSuccessSnackbar.value = true
      // 保存完了後、一覧画面に戻る
      setTimeout(() => {
        router.push('/dashboard')
      }, 3000)
    }

    onMounted(() => {
      loadExperiment()
    })

    return {
      experimentData,
      loading,
      error,
      showSuccessSnackbar,
      loadExperiment,
      goBack,
      handleReportSaved
    }
  }
}
</script>
