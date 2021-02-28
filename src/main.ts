import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
