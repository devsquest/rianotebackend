import Vue from 'vue'
import App from './App.vue'
import configuration from './configuration'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2'
import toastr from 'vue-toastr'
import 'sweetalert2/dist/sweetalert2.min.css'
import './../sass/app.scss'
import routes from './routes'
import store from './store'
import middlewarePipeline from './middleware/middlewarePipeline'
import VueClipboard from 'vue-clipboard2'
import './filters'

Vue.prototype.$appConfig = configuration

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2)
Vue.use(toastr)
Vue.use(VueClipboard)
Vue.use(require('vue-moment'));

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

router.beforeEach((to, from, next) => {

  /** Navigate to next if middleware is not applied */
  if (!to.meta.middleware) {
    return next()
  }

  const middleware = to.meta.middleware;
  const context = {
    to,
    from,
    next,
    //   store  | You can also pass store as an argument
  }

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
