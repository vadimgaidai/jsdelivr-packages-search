module.exports = {
	devServer: {
		proxy: process.env.VUE_APP_API,
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
