import Vue from 'vue'
import '@babel/polyfill'

import { request } from '@/utils/fetch'
import vuetify from '@/plugins/vuetify'

import api from './api'
import store from './store'

import App from './App.vue'

import './registerServiceWorker'
import './assets/style/index.scss'

import 'roboto-fontface/css/roboto/roboto-fontface.css'

api({
	request,
	store,
})

Vue.config.productionTip = false

new Vue({
	store,
	vuetify,
	render: h => h(App),
}).$mount('#app')
