<template>
  <v-container class="fill-height position-relative" fluid>
    <v-row align="start" justify="center" class="mt-16">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-0 rounded-lg" style="background: rgba(255, 255, 255, 0.95)">
          <v-card-title class="text-h4 font-weight-bold text-center py-6"
            style="font-family: 'Noto Sans JP', sans-serif;">
            ExperiMentor
            <div class="text-subtitle-1 mt-2 text-grey-darken-1">実験をもっとスマートに</div>
          </v-card-title>
          <v-card-text class="pa-6">
            <v-btn @click="login" color="primary" block class="mb-4 py-6 text-body-1 font-weight-medium" elevation="2"
              rounded="lg">
              <v-icon start icon="mdi-login" class="mr-2"></v-icon>
              ログイン
            </v-btn>
            <v-btn @click="signup" variant="outlined" block class="py-6 text-body-1 font-weight-medium" elevation="0"
              rounded="lg">
              <v-icon start icon="mdi-account-plus" class="mr-2"></v-icon>
              アカウント作成
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
export default {
  name: 'StartScreen',
  methods: {
    login() {
      this.$router.push('/login')
    },
    signup() {
      this.$router.push('/signup')
    }
  }
}
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
