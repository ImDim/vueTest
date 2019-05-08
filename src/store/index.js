import Vue from 'vue'
import Vuex from 'vuex'
import common from './common'
import { localStoragePlugin } from './plugins'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { common },
  plugins: [localStoragePlugin]
})
