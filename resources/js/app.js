import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './../sass/app.scss'
import 'popper.js'
import routes from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
