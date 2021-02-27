<template>
	<header :class="[$style.header]">
		<h1 :class="[$style.title]">JsDelivr search</h1>
	</header>
</template>

<script>
export default {
	name: 'VHeader',
}
</script>

<style lang="scss" module>
@import './v-header.scss';
</style>
