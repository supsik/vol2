<template>
	<div class="text-doc-wr" v-html="content" />
</template>
<script setup>
const props = defineProps({
	content: {
		type: String
	},
})
</script>
<style lang='scss'>
.text-doc-wr {
	width: 100%;
	padding: 16px 24px;
	font-family: 'Montserrat-light';

	h2 {
		font-size: 16px;
		font-family: 'Montserrat';
		font-weight: 400;
	}

	p {
		margin-top: 24px;
		font-size: 13px;
		line-height: 20px;
	}

	a {
		text-decoration: none;
		color: #516300;
	}
}
</style>