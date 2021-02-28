module.exports = {
	devServer: {
		proxy: 'https://data.jsdelivr.com/v1/',
	},
	pwa: {
		name: 'Vue.js',
	},
	pages: {
		index: {
			entry: 'src/main.js',
			template: 'public/index.html',
			filename: 'index.html',
			title: 'Vue.js',
		},
	},
	css: {
		loaderOptions: {
			scss: {
				prependData: `@import "~@/assets/style/common/variables.scss";`,
			},
		},
	},
}
