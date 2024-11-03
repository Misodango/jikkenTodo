<template>
  <v-dialog :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)" max-width="900px">
    <v-card>
      <v-card-title class="text-h5">
        実験データの確認・編集
        <v-spacer></v-spacer>
        <v-btn icon @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text v-if="localData">
        <v-form ref="form">
          <!-- 基本情報 -->
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field v-model="localData.title" label="実験タイトル" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field v-model="localData.date" label="実施日" type="date"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea v-model="localData.objective" label="実験目的" rows="3"></v-textarea>
            </v-col>
          </v-row>

          <!-- 実験手順 -->
          <v-card class="mb-4 pa-4">
            <v-card-title class="text-h6">実験手順</v-card-title>
            <div v-for="(step, index) in localData.steps" :key="index" class="mb-4">
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="step.description" :label="`Step ${step.stepId}: 手順説明`"></v-text-field>
                </v-col>
              </v-row>

              <!-- 材料リスト -->
              <v-row class="ml-4">
                <v-col cols="12">
                  <v-chip-group column>
                    <template v-for="(material, mIndex) in step.materials" :key="mIndex">
                      <v-chip closable @click:close="step.materials.splice(mIndex, 1)">
                        {{ material }}
                      </v-chip>
                    </template>
                  </v-chip-group>
                  <v-text-field v-model="newMaterial" label="材料を追加" append-icon="mdi-plus"
                    @click:append="addMaterial(step)" @keyup.enter="addMaterial(step)"></v-text-field>
                </v-col>
              </v-row>

              <!-- サブステップ -->
              <div v-if="step.subSteps" class="ml-4">
                <div v-for="(subStep, sIndex) in step.subSteps" :key="sIndex">
                  <v-row>
                    <v-col cols="12">
                      <v-text-field v-model="subStep.description" :label="`サブステップ ${subStep.stepId}`"></v-text-field>
                    </v-col>
                  </v-row>
                </div>
              </div>

              <v-text-field v-model="step.notes" label="注意点" class="ml-4"></v-text-field>
            </div>
          </v-card>

          <!-- 注意事項 -->
          <v-card class="mb-4 pa-4">
            <v-card-title class="text-h6">注意事項</v-card-title>
            <v-row>
              <v-col cols="12">
                <v-chip-group column>
                  <template v-for="(precaution, index) in localData.precautions" :key="index">
                    <v-chip closable @click:close="localData.precautions.splice(index, 1)">
                      {{ precaution }}
                    </v-chip>
                  </template>
                </v-chip-group>
                <v-text-field v-model="newPrecaution" label="注意事項を追加" append-icon="mdi-plus"
                  @click:append="addPrecaution" @keyup.enter="addPrecaution"></v-text-field>
              </v-col>
            </v-row>
          </v-card>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" @click="closeDialog">キャンセル</v-btn>
        <v-btn v-if="!localData.id" color="primary" @click="saveExperiment">保存</v-btn>
        <v-btn v-else-if="localData.id" color="primary" @click="saveEditedData">更新</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { ref, watch } from 'vue'
import { doc, updateDoc, getFirestore, collection, addDoc } from 'firebase/firestore'

export default {
  name: 'ExperimentEditor',
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    experimentData: {
      type: Object,
      required: true
    }
  },

  emits: ['update:modelValue', 'saved'],

  setup(props, { emit }) {
    const localData = ref(null)
    const newMaterial = ref('')
    const newPrecaution = ref('')

    // experimentDataの変更を監視して、localDataを更新
    watch(() => props.experimentData, (newVal) => {
      if (newVal) {
        localData.value = JSON.parse(JSON.stringify(newVal))
      }
    }, { immediate: true, deep: true })

    const closeDialog = () => {
      emit('update:modelValue', false)
    }

    const addMaterial = (step) => {
      if (newMaterial.value.trim()) {
        step.materials.push(newMaterial.value.trim())
        newMaterial.value = ''
      }
    }

    const addPrecaution = () => {
      if (newPrecaution.value.trim()) {
        localData.value.precautions.push(newPrecaution.value.trim())
        newPrecaution.value = ''
      }
    }

    const saveExperiment = async () => {
      try {
        const db = getFirestore()
        // タイムスタンプを追加
        localData.value.createdAt = new Date()

        const docRef = await addDoc(collection(db, 'experiments'), localData.value)
        emit('saved', docRef.id)
        closeDialog()

        // 成功メッセージを表示
        alert('実験データが保存されました')
      } catch (error) {
        // console.error('Error saving experiment:', error)
        alert('保存中にエラーが発生しました')
      }
    }

    const saveEditedData = async () => {
      try {
        const db = getFirestore()
        const experimentRef = doc(db, 'experiments', localData.value.id)
        await updateDoc(experimentRef, {
          title: localData.value.title,
          objective: localData.value.objective,
          date: localData.value.date,
          steps: localData.value.steps,
          precautions: localData.value.precautions,
          equipmentPhotos: localData.value.equipmentPhotos,
        })
        emit('saved', experimentRef.id)
        closeDialog()

      } catch (error) {
        // console.error('進捗保存エラー:', error)
      }
    }

    return {
      localData,
      newMaterial,
      newPrecaution,
      closeDialog,
      addMaterial,
      addPrecaution,
      saveExperiment,
      saveEditedData
    }
  }
}
</script>
