<template>
	<v-app id="app">
		<v-header />
		<v-main>
			<v-container>
				123
			</v-container>
		</v-main>
		<v-footer />
	</v-app>
</template>

<script>
import VHeader from '@/components/VHeader'
import VFooter from '@/components/VFooter'

export default {
	components: {
		VHeader,
		VFooter,
	},
}
</script>
<style lang="scss"></style>
