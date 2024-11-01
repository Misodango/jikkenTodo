<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-12 pa-4">
          <v-card-title class="text-center text-h4 font-weight-bold">
            サインアップ
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleSignup" v-model="valid">
              <v-text-field v-model="email" label="Email" type="email" :rules="emailRules" required
                prepend-icon="mdi-email" variant="outlined" class="mb-2"></v-text-field>

              <v-text-field v-model="displayName" label="表示名" prepend-icon="mdi-rename" variant="outlined"
                :rules="displayNameRules" required class="mb-2"></v-text-field>

              <v-text-field v-model="password" label="Password" :type="showPassword ? 'text' : 'password'"
                :rules="passwordRules" required prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'" @click:append="showPassword = !showPassword"
                variant="outlined" class="mb-4"></v-text-field>

              <v-text-field v-model="confirmPassword" label="Confirm Password"
                :type="showConfirmPassword ? 'text' : 'password'" :rules="confirmPasswordRules" required
                prepend-icon="mdi-lock-check" :append-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append="showConfirmPassword = !showConfirmPassword" variant="outlined"
                class="mb-4"></v-text-field>

              <v-btn type="submit" color="primary" block :loading="loading" :disabled="!valid || loading" size="large">
                登録
              </v-btn>
            </v-form>
          </v-card-text>

          <v-alert v-if="message" :type="message.includes('successful') ? 'success' : 'error'" class="mt-4">
            {{ message }}
          </v-alert>

          <v-card-text class="text-center mt-4">
            すでにアカウントをお持ちですか？
            <v-btn variant="text" color="primary" to="/login">
              ログインはこちら
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { auth } from "../firebase/init";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default {
  data() {
    return {
      valid: false,
      loading: false,
      email: "",
      password: "",
      confirmPassword: "",
      displayName: "",
      message: "",
      showPassword: false,
      showConfirmPassword: false,
      emailRules: [
        v => !!v || 'メールアドレスを入力してください.',
        v => /.+@.+\..+/.test(v) || '有効なメールアドレスを入力してください.'
      ],
      passwordRules: [
        v => !!v || 'パスワードを入力してください.',
        v => v.length >= 6 || 'パスワードは最低6文字です.'
      ],
      confirmPasswordRules: [
        v => !!v || 'パスワードを確認してください.',
        v => v === this.password || 'パスワードが一致しません.'
      ],
      displayNameRules: [
        v => !!v || '表示名を入力してください.',
        v => v.length <= 15 || '表示名は15文字以下にしてください'
      ]
    };
  },
  methods: {
    async handleSignup() {
      if (!this.valid) return;

      this.loading = true;
      this.message = "";

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password)
        try {
          await updateProfile(userCredential.user, { displayName: this.displayName })
        } catch (error) {
          this.message("ユーザー名を登録できませんでした.")
        }
        this.message = "登録が完了しました!";
        this.$router.push("/login");
      } catch (error) {
        this.message = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
