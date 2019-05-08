import Vue from 'vue'
import store from './store'
import { http, router } from './http'
// import auth from './auth'
// import Vuetify from 'vuetify'
// import URLSearchParams from 'url-search-params'
import App from './app'
// import Loading from './components/loading'
// import Appbar from './components/app-bar'
// import Appfooter from './components/app-footer'

import registerFactory from './common/index'
registerFactory();

Vue.use(http)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
