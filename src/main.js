// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/new.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import Vuex from 'vuex'
import { store } from './store.js'



Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
    store,
  el: '#app',
  template: '<App/>',
  components: { App },
    render: h => h(App)
})
