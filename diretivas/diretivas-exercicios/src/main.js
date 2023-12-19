import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	// eslint-disable-next-line no-unused-vars
	bind(el, binding, vnode){
		// el.style.backgroundColor = 'lightgreen'
		el.style.backgroundColor = binding.value
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
