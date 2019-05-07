import Vue from 'vue'
import VueFactory from 'vue-factory'

Vue.use(VueFactory)

import Alert from "@/modules/common/alert";
import Storage from "@/modules/common/storage";

export default function registerFactory() {
    Vue.factory.register({
        Alert, 
        Storage
    })
}
