<template>
  <v-container fluid>
    <!-- ヘッダー -->
    <v-row class="mb-6">
      <v-col cols="12">
        <v-card>
          <v-card-title class="text-h5 d-flex align-center">
            <v-icon start class="me-2">mdi-view-dashboard</v-icon>
            実験一覧
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <!-- フィルターとソート -->
    <v-row class="mb-4">
      <v-col cols="12" sm="4">
        <v-select v-model="filter" :items="filterOptions" label="ステータス" prepend-inner-icon="mdi-filter"
          clearable></v-select>
      </v-col>
      <v-col cols="12" sm="4">
        <v-select v-model="sortBy" :items="sortOptions" label="並び替え" prepend-inner-icon="mdi-sort"></v-select>
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field v-model="search" label="実験を検索" prepend-inner-icon="mdi-magnify" clearable></v-text-field>
      </v-col>
    </v-row>

    <!-- 実験一覧 -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <div class="pa-4">
            <v-row>
              <v-col v-for="experiment in filteredExperiments" :key="experiment.id" cols="12" sm="6" md="4">
                <v-card :class="['experiment-card', { 'completed': experiment.status === 'completed' }]"
                  @click="navigateToExperiment(experiment.id)">
                  <v-card-item>
                    <template v-slot:prepend>
                      <v-icon :color="getStatusColor(experiment.status)" size="large" class="me-2">
                        mdi-flask
                      </v-icon>
                    </template>
                    <v-card-title>{{ experiment.title }}</v-card-title>
                    <v-card-subtitle>
                      予定日: {{ formatDate(experiment.date) }}
                    </v-card-subtitle>
                  </v-card-item>

                  <v-card-text>
                    <div class="text-truncate">{{ experiment.description || '説明なし' }}</div>
                    <v-chip class="mt-2" :color="getStatusColor(experiment.status)" size="small" label>
                      {{ getStatusText(experiment.status) }}
                    </v-chip>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn variant="text" color="primary" :to="`/experiment/${experiment.id}`">
                      詳細を見る
                      <v-icon end>mdi-arrow-right</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>

            <!-- データがない場合 -->
            <v-alert v-if="filteredExperiments.length === 0" type="info" variant="tonal" class="mt-4">
              実験が見つかりません。新しい実験を登録してみましょう！
            </v-alert>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- 新規実験登録FABボタン -->
    <v-btn class="floating-btn" color="primary" icon="mdi-plus" size="x-large"
      @click="$router.push('/register')"></v-btn>
  </v-container>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { db, auth } from '../firebase/init'
import { collection, query, getDocs, where } from 'firebase/firestore'

export default {
  name: 'DashboardScreen',

  setup() {
    const router = useRouter()
    const experiments = ref([])
    const filter = ref('')
    const sortBy = ref('date')
    const search = ref('')

    const filterOptions = [
      { title: 'すべて', value: '' },
      { title: '予定', value: 'pending' },
      { title: '進行中', value: 'inProgress' },
      { title: '完了', value: 'completed' }
    ]

    const sortOptions = [
      { title: '日付順', value: 'date' },
      { title: 'タイトル順', value: 'title' },
      { title: 'ステータス順', value: 'status' }
    ]

    // フィルタリングとソートを適用した実験リスト
    const filteredExperiments = computed(() => {
      let filtered = [...experiments.value]

      // 検索フィルター
      if (search.value) {
        filtered = filtered.filter(exp =>
          exp.title.toLowerCase().includes(search.value.toLowerCase()) ||
          exp.description?.toLowerCase().includes(search.value.toLowerCase())
        )
      }

      // ステータスフィルター
      if (filter.value) {
        filtered = filtered.filter(exp => exp.status === filter.value)
      }

      // ソート
      filtered.sort((a, b) => {
        switch (sortBy.value) {
          case 'date':
            return new Date(a.date) - new Date(b.date)
          case 'title':
            return a.title.localeCompare(b.title)
          case 'status':
            return a.status.localeCompare(b.status)
          default:
            return 0
        }
      })

      return filtered
    })

    const fetchExperiments = async () => {

      try {
        const q = query(
          collection(db, 'experiments'),
          where('userId', '==', auth.currentUser?.displayName || '')
        )
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
        experiments.value = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          //   date: doc.data().date.toDate()
        }))
      } catch (error) {
        console.error('Error fetching experiments:', error)
      }
    }

    const formatDate = (date) => {
      return new Date(date).toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    const getStatusColor = (status) => {
      const colors = {
        pending: 'grey',
        inProgress: 'blue',
        completed: 'green'
      }
      return colors[status] || 'grey'
    }

    const getStatusText = (status) => {
      const texts = {
        pending: '予定',
        inProgress: '進行中',
        completed: '完了'
      }
      return texts[status] || '不明'
    }

    const navigateToExperiment = (experimentId) => {
      router.push(`/experiment/${experimentId}`)
    }

    onMounted(() => {
      fetchExperiments()
    })

    return {
      experiments,
      filter,
      filterOptions,
      sortBy,
      sortOptions,
      search,
      filteredExperiments,
      formatDate,
      getStatusColor,
      getStatusText,
      navigateToExperiment
    }
  }
}
</script>

<style scoped>
.experiment-card {
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.experiment-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
}

.experiment-card.completed {
  opacity: 0.8;
}

.floating-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
}
</style>
