import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import './theme.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Vuex)
app.mount('#app')
