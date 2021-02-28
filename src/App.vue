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
						:page="page"
						:options.sync="options"
						:headers="headers"
						:items="packages"
						:loading="loading"
						:items-per-page="10"
						:search="search"
						@click:row="onRowClick"
					/>
				</v-card>
				<package-modal :is-visible.sync="isDialog" :title="getPackageName" :type="getPackageType" />
			</v-container>
		</v-main>
		<v-footer />
	</v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import VHeader from '@/components/VHeader'
import PackageModal from '@/components/modals/list/PackageModal'
import VFooter from '@/components/VFooter'

export default {
	components: {
		VHeader,
		PackageModal,
		VFooter,
	},
	data() {
		return {
			loading: true,
			isDialog: false,
			page: 1,
			options: {},
			search: '',
			package: {},
			headers: [
				{ text: 'Name', value: 'name' },
				{ text: 'Type', value: 'type' },
				{ text: 'Hits', value: 'hits' },
			],
		}
	},
	computed: {
		...mapState('packages', ['packages']),
		getPackageName() {
			return this.package?.name
		},
		getPackageType() {
			return this.package?.type
		},
	},
	watch: {
		options: {
			handler() {
				// TODO: Api does not give the maximum number of pages (or I didn't find)
				if (this.options.page <= 5 && this.options.page > this.page) {
					this.page++
					this.onLoadTableContent(this.page)
				}
			},
		},
		deep: true,
	},
	mounted() {
		this.onLoadTableContent()
	},
	methods: {
		...mapActions('packages', ['loadPackages']),
		onLoadTableContent() {
			this.loading = true
			this.loadPackages(this.page)
			this.loading = false
		},
		onRowClick(event) {
			this.isDialog = true
			this.package = event
		},
	},
}
</script>
<style lang="scss"></style>
