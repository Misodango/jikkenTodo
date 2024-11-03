import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import MessageDialog from './views/MessageDialog.vue'

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(VueAxios)
app.use(axios)
app.use('MessageDialog', MessageDialog)

app.mount('#app')
