import Vue from 'vue'
import VueFactory from 'vue-factory'

Vue.use(VueFactory)

import Alert from "./alert";
import Storage from "./storage";

export default function registerFactory() {
    Vue.factory.register({
        Alert, 
        Storage
    })
}
