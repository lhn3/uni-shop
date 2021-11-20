import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import {myRequest} from 'serve/request.js'
// 全局注册封装的请求
Vue.prototype.$myRequest=myRequest

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif