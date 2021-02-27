export default ({ request }) => ({
	getPackages(page = 1) {
		return request({
			url: 'stats/packages?',
			params: {
				page,
				limit: 10,
			},
		})
	},
})
