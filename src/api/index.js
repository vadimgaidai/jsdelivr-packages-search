import Vue from 'vue'
import packages from './modules/packages'

export default ({ request }) => {
	const api = {}
	const modules = {
		packages,
	}
	Object.entries(modules).forEach(([key, value]) => {
		api[key] = value({
			request,
		})
	})
	Vue.prototype.$api = api
}
