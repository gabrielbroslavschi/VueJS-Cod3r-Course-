import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import appBar from "./app-bar.vue";
import vueApp from "./vue-app.vue";


Vue.config.productionTip = false
Vue.component('app-bar', appBar)
Vue.component('app-vue-app', vueApp)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
