<template>
	<img :src="`images${path}`" alt="">
</template>
<script setup>
	const props = defineProps({
		path: {
			type      : String,
			required  : true,
		}
	})
</script>
<style lang='scss'>

</style>