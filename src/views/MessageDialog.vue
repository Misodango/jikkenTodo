<!-- MessageDialog.vue -->
<template>
  <v-dialog v-model="isActive" max-width="400">
    <v-card>
      <v-card-text>
        {{ message }}
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="text" @click="closeDialog">
          閉じる
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'MessageDialog',
  props: {
    message: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const isActive = ref(props.show)

    // `props.message` が変更されたときにダイアログを表示
    watch(
      () => props.message,
      (newValue) => {
        if (newValue) {
          isActive.value = true
        }
      }
    )

    // ダイアログを閉じてメッセージを初期化
    const closeDialog = () => {
      isActive.value = false
      emit('update:show', false) // ダイアログを閉じたことを親に通知
    }

    // `show` プロパティの変更を監視し、`isActive` を更新
    watch(
      () => props.show,
      (value) => {
        isActive.value = value
      }
    )

    return {
      isActive,
      closeDialog,
      // message: props.message // props.message を直接使用
    }
  }
}
</script>
