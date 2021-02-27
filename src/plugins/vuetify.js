import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/lib/util/colors'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
	theme: {
		themes: {
			dark: {
				background: colors.grey.darken4,
				primary: colors.blue,
				secondary: colors.orange,
				accent: colors.green,
				error: colors.red,
			},
		},
		dark: true,
		options: {
			customProperties: true,
		},
	},
	icons: {
		iconfont: 'md',
	},
})
