<template>
	<div id="app" class="entry">
		<v-header />
		<v-main />
		<v-footer />
	</div>
</template>

<script>
import VHeader from '@/components/VHeader'
import VMain from '@/views/VMain.vue'
import VFooter from '@/components/VFooter'

export default {
	components: {
		VHeader,
		VMain,
		VFooter,
	},
}
</script>
<style lang="scss"></style>
