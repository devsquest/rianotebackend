import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    cart,
    login,
  }
})
