import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.postcss'

createApp(App).use(router).mount('#app')
