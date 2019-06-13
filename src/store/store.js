import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//state
const state = {
  count: 0
}

//getters
const getters = {
  count: state => state.count
}

//mutations, //只能为同步方法
const mutations = {
  increment: state => state.count++,
  decrement: state => state.count--,
}

//actions  可以为异步方法
const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
}


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,

})
