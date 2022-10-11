import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from "mitt";

const app = createApp(App).use(store).use(router)
app.config.globalProperties.$bus = new mitt()  //全局配置$bus
app.mount('#app')
