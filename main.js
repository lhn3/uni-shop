import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import {myRequest} from 'serve/request.js'
// 全局注册封装的请求
Vue.prototype.$myRequest=myRequest
// 全局过滤器
Vue.filter('timeFilter',(data)=>{
	let res=new Date(data)
	let year=res.getFullYear()
	// 不足两位，前面用0补齐
	let month=(res.getMonth()+1).toString().padStart(2,0)
	let day=res.getDate().toString().padStart(2,0)
	let hours=res.getHours().toString().padStart(2,0)
	let min=res.getMinutes().toString().padStart(2,0)
	let sencond=res.getSeconds().toString().padStart(2,0)
	return `${year}-${month}-${day} ${hours}:${min}:${sencond}`
})


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