import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state : state ,
  actions : actions,
  mutations : mutations,
  getters : getters

  // // 保存全局共享数据
  // state: {
  //   isfullscreen: false
  // },
  // // 修改全局共享数据的方法
  // mutations: {
  //   changefullscreen(state, flag) {
  //     state.isfullscreen = flag
  //   }
  // },
  // // 触发mutations中保存方法的方法
  // actions: {
  //   setfullscreen({
  //     commit
  //   }, flag) {
  //     commit('changefullscreen', flag)
  //   }
  // },
  // modules: {},
  // getters: {
  //   isfullscreen(state) {
  //     return state.isfullscreen
  //   }
  // }
})