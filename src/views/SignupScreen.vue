<template>
  <v-container class="fill-height position-relative" fluid>
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


    <div class="lab-scene">
      <div class="float-element beaker">
        <svg viewBox="0 0 100 100" width="80" height="80">
          <path d="M30,20 L30,70 C30,85 70,85 70,70 L70,20 L30,20 Z" fill="none" stroke="currentColor"
            stroke-width="3" />
          <path d="M25,20 L75,20" stroke="currentColor" stroke-width="3" />
          <path class="liquid" d="M30,45 L30,70 C30,85 70,85 70,70 L70,45 Z" fill="currentColor" />
        </svg>
      </div>
      <div class="float-element flask">
        <svg viewBox="0 0 100 100" width="60" height="60">
          <path d="M50,10 L50,40 L30,80 C25,90 75,90 70,80 L50,40" fill="none" stroke="currentColor" stroke-width="3" />
          <path class="liquid" d="M30,80 C25,90 75,90 70,80 L50,60 L30,80" fill="currentColor" />
        </svg>
      </div>
      <div class="float-element molecule">
        <svg viewBox="0 0 100 100" width="40" height="40">
          <circle cx="50" cy="50" r="10" fill="currentColor" />
          <circle cx="80" cy="50" r="10" fill="currentColor" />
          <circle cx="50" cy="80" r="10" fill="currentColor" />
          <line x1="50" y1="50" x2="80" y2="50" stroke="currentColor" stroke-width="3" />
          <line x1="50" y1="50" x2="50" y2="80" stroke="currentColor" stroke-width="3" />
        </svg>
      </div>
    </div>


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

<style scoped>
.v-btn {
  text-transform: none;
  letter-spacing: 0.5px;
}

.v-container {
  background: linear-gradient(135deg, #6B8DD6 0%, #8E37D7 100%);
  overflow: hidden;
}

.lab-scene {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50vh;
  pointer-events: none;
}

.float-element {
  position: absolute;
  color: rgba(255, 255, 255, 0.2);
  animation: float 6s infinite ease-in-out;
}

.beaker {
  left: 20%;
  bottom: 20%;
  animation-delay: -2s;
}

.flask {
  left: 60%;
  bottom: 30%;
  animation-delay: -4s;
}

.molecule {
  left: 40%;
  bottom: 40%;
  animation-delay: -1s;
}

.liquid {
  animation: bubble 3s infinite ease-in-out;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes bubble {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }
}

/* スマートフォン向けの調整 */
@media (max-width: 600px) {
  .lab-scene {
    height: 30vh;
  }

  .float-element {
    transform: scale(0.7);
  }
}
</style>
