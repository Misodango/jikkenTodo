<template>
  <div>
    <h1>Sign Up</h1>
    <form @submit.prevent="handleSignup">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { auth } from "../firebase/init";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      message: "",
    };
  },
  methods: {
    async handleSignup() {
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        this.message = "Signup successful!";
        this.$router.push("/login"); // ログイン画面に遷移
      } catch (error) {
        this.message = error.message;
      }
    },
  },
};
</script>
