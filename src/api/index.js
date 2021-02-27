import Vue from 'vue'

export default ({ request }) => {
	const api = {}
	const modules = {}
	Object.entries(modules).forEach(([key, value]) => {
		api[key] = value({
			request,
		})
	})
	Vue.prototype.$api = api
}
