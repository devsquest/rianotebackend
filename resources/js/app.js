import Vue from 'vue'
import App from './App.vue'
import configuration from './configuration'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './../sass/app.scss'
import 'popper.js'
import routes from './routes'
import store from './store'

Vue.prototype.$appConfig = configuration

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
