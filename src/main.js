import Vue from 'vue'
import App from './App.vue'
import { http, router } from './http'
import store from './store'

Vue.config.productionTip = false

Vue.use(http)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
