<template>
	<div class="pdf-wr">
		<embed :src="`files/${path}`" type="application/pdf" width="100%" height="100%">
	</div>
</template>
<script setup>
const props = defineProps({
	path: {
		type: String
	}
})
</script>
<style lang='scss'>
.pdf-wr {
	width: 100%;
}
</style>