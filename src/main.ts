import { createApp } from 'vue'
import '@/styles/index.css'
import App from './App.vue'
import { VueQueryPlugin } from 'vue-query'
import { router } from './router'
const app = createApp(App)

app.use(router)
app.use(VueQueryPlugin)
app.mount('#app')
