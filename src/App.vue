<template>
	<v-app id="app">
		<v-header />
		<v-main>
			<v-container>
				<v-card>
					<v-card-title>
						Packages
						<v-spacer></v-spacer>
						<v-text-field
							v-model="search"
							append-icon="mdi-magnify"
							label="Search"
							single-line
							hide-details
						/>
					</v-card-title>
					<v-data-table
						:headers="headers"
						:items="packages"
						:loading="packages.length === 0"
						:items-per-page="10"
						:search="search"
					/>
				</v-card>
			</v-container>
		</v-main>
		<v-footer />
	</v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import VHeader from '@/components/VHeader'
import VFooter from '@/components/VFooter'

export default {
	components: {
		VHeader,
		VFooter,
	},
	data() {
		return {
			search: '',
			headers: [
				{ text: 'Name', value: 'name' },
				{ text: 'Type', value: 'type' },
				{ text: 'Hits', value: 'hits' },
			],
		}
	},
	computed: {
		...mapState('packages', ['packages']),
	},
	async mounted() {
		await this.loadPackages()
	},
	methods: {
		...mapActions('packages', ['loadPackages']),
	},
}
</script>
<style lang="scss"></style>
