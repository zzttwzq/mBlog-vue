import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/reset.css'
import md5 from 'js-md5'
import api from './network/apis.js'
import http from './network/http.js'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.md5 = md5
Vue.prototype.api = api
Vue.prototype.http = http

Vue.prototype.getByteLength = function (str) {
  if (str == null) return 0
  if (typeof str !== 'string') {
    str += ''
  }
  return str.replace(/[^\x00-\xff]/g,"01").length
}

// Vue.use(vuex)
// // store对象
// var store = new vuex.Store({
//   state: {
//     show:false,
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
