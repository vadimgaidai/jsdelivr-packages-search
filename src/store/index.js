import Vue from 'vue'
import Vuex from 'vuex'
import packages from './modules/packages'

Vue.use(Vuex)

const store = new Vuex.Store({
	namespaced: true,
	modules: {
		packages,
	},
})

export default store
