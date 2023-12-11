import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import contador from './contador'

Vue.config.productionTip = false
Vue.component('app-contador', contador)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
