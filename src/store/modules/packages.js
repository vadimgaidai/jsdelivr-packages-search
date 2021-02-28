export default {
	namespaced: true,
	state: {
		packages: [],
	},
	mutations: {
		setPackages(state, list) {
			state.packages = list
		},
		setMorePackages(state, list) {
			state.packages = [...state.packages, ...list]
		},
	},
	actions: {
		async loadPackages({ commit }, page) {
			try {
				const { data } = await this._vm.$api.packages.getPackages(page)
				commit(page > 1 ? 'setMorePackages' : 'setPackages', data)
			} catch (error) {
				return error
			}
		},
	},
}
