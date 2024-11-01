<template>
  <v-container fluid>
    <v-row class="mb-6">
      <v-col cols="12">
        <v-card class="mb-4">
          <v-card-title class="text-h5 d-flex align-center">
            <v-icon start class="me-2" v-model="displayName">mdi-account</v-icon>
            アプリ名へようこそ！ {{ displayName }}でログインしています．
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <!-- Upcoming な実験について表示する -->
    <v-row>
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title class="text-h6">
            <v-icon start class="me-2">mdi-calendar-clock</v-icon>
            直近の実験
          </v-card-title>

          <v-card-text>
            <v-list v-if="upcomingExperiments.length > 0">
              <v-list-item v-for="experiment in upcomingExperiments" :key="experiment.id" :title="experiment.title"
                :subtitle="formatDate(experiment.date)">
                <template v-slot:prepend>
                  <v-icon :color="getStatusColor(experiment.status)" class="me-2">
                    mdi-flask
                  </v-icon>
                </template>

                <template v-slot:append>
                  <v-btn variant="text" color="primary" :to="`/experiment/${experiment.id}`">
                    View Details
                  </v-btn>
                </template>
              </v-list-item>
            </v-list>

            <v-alert v-else type="info" variant="tonal" class="mt-4">
              次の実験は登録されていません．登録してみましょう！
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- 登録・確認など -->
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title class="text-h6">
            <v-icon start class="me-2">mdi-lightning-bolt</v-icon>
            こちらから登録(このコメントは変更したい)
          </v-card-title>

          <v-card-text>
            <v-btn block color="primary" class="mb-4" prepend-icon="mdi-plus" @click="register">
              次の実験を登録
            </v-btn>

            <v-btn block variant="outlined" class="mb-4" prepend-icon="mdi-file-upload" @click="openImportDialog">
              実験テキストを画像からインポート
            </v-btn>

            <v-btn block variant="outlined" prepend-icon="mdi-calendar" :to="'/calendar'">
              カレンダーを見る
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- New Experiment Dialog -->
    <v-dialog v-model="newExperimentDialog" max-width="600px">
      <v-card>
        <v-card-title class="text-h5">Create New Experiment</v-card-title>
        <v-card-text>
          <v-form v-model="valid" @submit.prevent="createExperiment">
            <v-text-field v-model="newExperiment.title" label="Experiment Title" required
              :rules="[v => !!v || 'Title is required']"></v-text-field>

            <v-textarea v-model="newExperiment.description" label="Description" rows="3"></v-textarea>

            <v-date-picker v-model="newExperiment.date" class="mt-4"></v-date-picker>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey-darken-1" variant="text" @click="newExperimentDialog = false">
            Cancel
          </v-btn>
          <v-btn color="primary" @click="createExperiment" :disabled="!valid">
            Create
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Import Dialog -->
    <v-dialog v-model="importDialog" max-width="600px">
      <v-card>
        <v-card-title class="text-h5">Import Experiment Text</v-card-title>
        <v-card-text>
          <v-file-input v-model="importFile" accept=".pdf,.jpg,.jpeg,.png" label="Upload experiment text"
            prepend-icon="mdi-camera" show-size truncate-length="15"></v-file-input>

          <v-alert v-if="processing" color="info" icon="mdi-progress-clock">
            Processing your document... This may take a moment.
          </v-alert>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey-darken-1" variant="text" @click="importDialog = false">
            Cancel
          </v-btn>
          <v-btn color="primary" @click="processDocument" :loading="processing" :disabled="!importFile">
            Process
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue'
import { auth, db, storage } from '../firebase/init'
import { collection, query, where, getDocs, addDoc, Timestamp } from 'firebase/firestore'
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { onAuthStateChanged } from "firebase/auth"

export default {
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
    const user = ref(auth.currentUser)
    // this.displayName = auth.currentUser.email
    const upcomingExperiments = ref([])
    const newExperimentDialog = ref(false)
    const importDialog = ref(false)
    const importFile = ref(null)
    const processing = ref(false)
    const valid = ref(false)

    const newExperiment = ref({
      title: '',
      description: '',
      date: new Date().toISOString().substr(0, 10),
    })

    const formatDate = (date) => {
      return new Date(date).toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }

    const getStatusColor = (status) => {
      const colors = {
        pending: 'grey',
        inProgress: 'blue',
        completed: 'green',
      }
      return colors[status] || 'grey'
    }

    const fetchUpcomingExperiments = async () => {
      if (!user.value) return;

      // 今日の日付の開始時刻（00:00:00）を取得
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const q = query(
        collection(db, 'experiments'),
        where('userId', '==', user.value.uid),
        where('date', '>=', Timestamp.fromDate(today)),
        // オプション: 日付順にソート
        // orderBy('date', 'asc')
      );

      try {
        const querySnapshot = await getDocs(q);
        upcomingExperiments.value = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          // Timestamp を Date に変換
          date: doc.data().date.toDate()
        }));
      } catch (error) {
        console.error('Error fetching experiments:', error);
        upcomingExperiments.value = [];
      }
    };
    const createExperiment = async () => {
      if (!valid.value) return

      try {
        await addDoc(collection(db, 'experiments'), { // firestore → db に変更
          userId: user.value.uid,
          title: newExperiment.value.title,
          description: newExperiment.value.description,
          date: Timestamp.fromDate(new Date(newExperiment.value.date)),
          status: 'pending',
          createdAt: Timestamp.now(),
        })

        newExperimentDialog.value = false
        newExperiment.value = {
          title: '',
          description: '',
          date: new Date().toISOString().substr(0, 10),
        }

        await fetchUpcomingExperiments()
      } catch (error) {
        console.error('Error creating experiment:', error)
      }
    }
    const processDocument = async () => {
      if (!importFile.value) return

      processing.value = true
      try {
        const file = importFile.value
        const fileRef = storageRef(storage, `experiments/${user.value.uid}/${Date.now()}_${file.name}`)

        // ファイルをアップロード
        await uploadBytes(fileRef, file)
        const url = await getDownloadURL(fileRef)
        console.log(url)

        // TODO: OCRとGemini APIの処理を追加
        // 1. Cloud Vision APIでOCR
        // 2. 抽出したテキストをGemini APIで解析
        // 3. 実験手順をフローチャートやチェックリストに変換

        importDialog.value = false
        // 処理結果を使って新しい実験を作成
      } catch (error) {
        console.error('Error processing document:', error)
        // TODO: エラー処理の追加
      } finally {
        processing.value = false
      }
    }

    const openNewExperimentDialog = () => {
      newExperimentDialog.value = true
    }

    const openImportDialog = () => {
      importDialog.value = true
    }

    onMounted(() => {
      fetchUpcomingExperiments()
    })

    return {
      user,
      upcomingExperiments,
      newExperimentDialog,
      importDialog,
      importFile,
      processing,
      valid,
      newExperiment,
      formatDate,
      getStatusColor,
      createExperiment,
      processDocument,
      openNewExperimentDialog,
      openImportDialog,
    }
  },
  methods: {
    register() {
      this.$router.push('/register')
    }
  }
}
</script>
