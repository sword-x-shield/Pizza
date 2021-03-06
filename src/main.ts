import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'
import '@/styles/index.scss'

const app = createApp(App)
app.use(store).use(router)
router.isReady().then(() => app.mount('#app'))
