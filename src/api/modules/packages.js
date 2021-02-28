export default ({ request }) => ({
	getPackages(page = 1) {
		return request({
			url: 'stats/packages?',
			params: {
				page,
				limit: 20,
			},
		})
	},
	getPackageVersions(name, type) {
		return request({
			url: `package/${type}/${name}`,
		})
	},
	getPackageByVersion(name, type, version) {
		return request({
			url: `package/${type}/${name}@${version}/stats?`,
		})
	},
})
