// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/reset.css'
import axios from 'axios' // 1、在这里引入axios
import md5 from 'js-md5'

Vue.prototype.md5 = md5
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

// get请求
Vue.prototype.get = function (url, success) {
  var timestamp = Date.parse(new Date())
  var userId = localStorage.getItem('userId')
  var token = localStorage.getItem('token')
  var sign = 'mblog is very good' + timestamp + userId
  sign = this.md5(sign)

  this.$axios.post(url, {}, {

    headers: {
      'Token': token,
      'Sign': sign,
      'UserId': userId,
      'Timesnamp': timestamp
    }
  }).then(resp => {
    if (resp.data['code'] === 0) {
      success(resp.data)
    } else {
      console.log(resp.data)
    }
  }).catch(err => {
    console.log('请求失败：' + err.status + ',' + err.statusText)
  })
}

// post请求
Vue.prototype.post = function (url, params, success) {
  var timestamp = Date.parse(new Date())
  var userId = localStorage.getItem('userId')
  var token = localStorage.getItem('token')
  var sign = 'mblog is very good' + timestamp + userId
  sign = this.md5(sign)

  this.$axios.post(url, params, {

    headers: {
      'Token': token,
      'Sign': sign,
      'UserId': userId,
      'Timesnamp': timestamp
    }
  }).then(resp => {
    if (resp.data['code'] === 0) {
      success(resp.data)
    } else {
      console.log(resp.data)
    }
  }).catch(err => {
    console.log('请求失败：' + err.status + ',' + err.statusText)
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
