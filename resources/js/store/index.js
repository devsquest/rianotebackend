import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import note from './modules/note'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    note,
  }
})
