<!-- Signup.vue -->
<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-12 pa-4">
          <v-card-title class="text-center text-h4 font-weight-bold">
            Sign Up
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleSignup" v-model="valid">
              <v-text-field v-model="email" label="Email" type="email" :rules="emailRules" required
                prepend-icon="mdi-email" variant="outlined" class="mb-2"></v-text-field>

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
                Sign Up
              </v-btn>
            </v-form>
          </v-card-text>

          <v-alert v-if="message" :type="message.includes('successful') ? 'success' : 'error'" class="mt-4">
            {{ message }}
          </v-alert>

          <v-card-text class="text-center mt-4">
            Already have an account?
            <v-btn variant="text" color="primary" to="/login">
              Login here
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { auth } from "../firebase/init";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      valid: false,
      loading: false,
      email: "",
      password: "",
      confirmPassword: "",
      message: "",
      showPassword: false,
      showConfirmPassword: false,
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be at least 6 characters'
      ],
      confirmPasswordRules: [
        v => !!v || 'Please confirm your password',
        v => v === this.password || 'Passwords must match'
      ]
    };
  },
  methods: {
    async handleSignup() {
      if (!this.valid) return;

      this.loading = true;
      this.message = "";

      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        this.message = "Signup successful!";
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
