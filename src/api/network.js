import axios from 'axios'
// import { reject } from 'core-js/fn/promise'
// 全局配置
axios.defaults.baseURL = 'http://127.0.0.1:3000'
axios.defaults.timeout = 3000
// 封装get 和 post 请求方法
export default {
  get: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.get(path, {
        params: data
      })
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  },
  post: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.post(path, data)
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  },
  all:function(list){
    return new Promise(function(resolve,rejcet){
      axios.all(list)
      .then(axios.spread(function(...result){
        resolve(result)
      }))
      .catch(function(err){
        reject(err)
      })
    })
  }
}