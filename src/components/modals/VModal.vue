<template>
	<v-dialog
		v-model="isVisible"
		max-width="700px"
		:disabled="isLoading"
		@click:outside="$emit('update:is-visible', false)"
		@keydown="onKeyDown"
	>
		<v-card>
			<v-card-title :class="[$style.title]">{{ title.toUpperCase() }}</v-card-title>
			<v-card-text>
				<div v-if="isLoading" :class="[$style.loader]">
					<v-progress-circular indeterminate color="primary" />
				</div>
				<slot v-else name="default" />
			</v-card-text>
		</v-card>
	</v-dialog>
</template>
<script>
export default {
	name: 'VModal',
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
		isLoading: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		onKeyDown({ key }) {
			if (key === 'Escape') {
				this.$emit('update:is-visible', false)
			}
		},
	},
}
</script>
<style lang="scss" module>
.title {
	margin-bottom: 15px;
	font-size: 25px;
}

.loader {
	display: flex;
	justify-content: center;
	width: 100%;
}
</style>
