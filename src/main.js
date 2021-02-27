import Vue from 'vue'

import { request } from '@/utils/fetch'
import api from './api'
import store from './store'

import App from './App.vue'

import './registerServiceWorker'
import './assets/style/index.scss'

api({
	request,
	store,
})

Vue.config.productionTip = false

new Vue({
	store,
	render: h => h(App),
}).$mount('#app')
