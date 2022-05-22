import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import './plugin/chart'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'

// import VueChartkick from 'vue-chartkick'
// import 'chartkick/chart.js'

// import Chart from 'chart.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'hbootstrap4rtl/bootstrap-rtl.css'
// import 'chartkick/chart.js'

const app = createApp(App)
app.use(router)
app.use(VueChartkick.use(Chart))
    // app.use(VueChartkick)
app.mount('#app')