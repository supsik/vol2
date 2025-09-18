<template>
	<div class="off-app-wr">
		<img :src="`images${appData.path}`" alt="">
	</div>
</template>
<script setup>
const props = defineProps({
	appData: {
		type      : Object,
		required  : true,
	}
})
</script>
<style lang='scss'>
.off-app-wr {
	height: calc(100% - 36px);
	display: flex;

	img {
		width: 100%;
		height: auto;
		max-height: 584px;
		object-fit: cover;
		margin: auto;
	}
}
</style>