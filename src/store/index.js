import Vue from 'vue'
import Vuex from 'vuex'

import notification from './modules/notification'
import packages from './modules/packages'

Vue.use(Vuex)

const store = new Vuex.Store({
	namespaced: true,
	modules: {
		notification,
		packages,
	},
})

export default store
