export default {
	namespaced: true,
	state: {
		notification: null,
	},
	mutations: {
		setNotification(state, notification) {
			state.notification = notification
		},
	},
}
