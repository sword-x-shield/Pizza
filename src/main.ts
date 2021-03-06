import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'
import '@/styles/index.scss'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = createI18n({
  legacy: true,
  locale: 'en',
  messages
})

const app = createApp(App)
app.use(store).use(router).use(i18n)
router.isReady().then(() => app.mount('#app'))
