<template>
	<v-modal
		:is-visible="isVisible"
		:title="title"
		:is-loading="isLoading"
		@update:is-visible="$emit('update:is-visible', $event)"
	>
		<p :class="[$style.text]">Type package: {{ type }}</p>
		<p v-if="type !== 'gh'" :class="[$style.text]">Latest version: {{ tags.latest }}</p>
		<v-expansion-panels>
			<v-expansion-panel>
				<v-expansion-panel-header>
					Package versions
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					<p v-for="version in versions" :key="version">{{ version }}</p>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
	</v-modal>
</template>
<script>
import VModal from '@/components/modals/VModal.vue'
import { mapMutations } from 'vuex'

export default {
	name: 'PackageModal',
	components: {
		VModal,
	},
	props: {
		isVisible: {
			type: Boolean,
			required: true,
			default: false,
		},
		title: {
			type: String,
			default: '',
		},
		type: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			isLoading: false,
			versions: [],
			tags: {},
		}
	},
	watch: {
		isVisible() {
			if (this.isVisible) {
				this.onLoadPackageVersions()
			}
		},
	},
	methods: {
		...mapMutations('notification', ['setNotification']),
		async onLoadPackageVersions() {
			this.isLoading = true
			try {
				const {
					data: { tags, versions },
				} = await this.$api.packages.getPackage(this.title, this.type)
				if (this.type !== 'gh') {
					this.tags = tags
				}
				this.versions = versions
			} catch (e) {
				this.setNotification({
					color: 'error',
					message: 'Failed to load package',
				})
				this.$emit('update:is-visible', false)
			}
			this.isLoading = false
		},
	},
}
</script>

<style lang="scss" module>
.text {
	font-size: 17px;
}
</style>
