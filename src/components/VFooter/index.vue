<template>
	<footer :class="[$style.footer]">
		<a :class="[$style.link]" href="https://github.com/vadimgaidai" target="_blunk">
			@github
		</a>
	</footer>
</template>

<script>
export default {
	name: 'VFooter',
}
</script>

<style lang="scss" module>
@import './v-footer.scss';
</style>
