import axios from 'axios' // 在这里引入axios
import md5 from 'js-md5'

export default {

  get: function (url, success) {

    let user = 

    var timestamp = Date.parse(new Date())
    var userId = localStorage.getItem('userId')
    var token = localStorage.getItem('token')
    var sign = 'mblog is very good' + timestamp + userId
    sign = md5(sign)

    axios.get(
      url, {}, {
        headers: {
          'Token': token,
          'Sign': sign,
          'UserId': userId,
          'Timesnamp': timestamp
        }
      }
    ).then(resp => {
      if (resp.data['code'] === 0) {
        success(resp.data)
      } else {
        console.log(resp.data)
      }
    }).catch(err => {
      console.log('请求失败：' + err.status + ',' + err.statusText)
    })
  },
  post: function (url, params, success) {
    var timestamp = Date.parse(new Date())
    var userId = localStorage.getItem('userId')
    var token = localStorage.getItem('token')
    var sign = 'mblog is very good' + timestamp + userId
    sign = md5(sign)

    axios.post(
      url, params, {
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
      console.log('post 请求错误：' + err + ',' + err.status + ',' + err.statusText)
    })
  }
}
