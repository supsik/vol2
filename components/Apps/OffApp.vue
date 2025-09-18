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
	height: 100%;
	display: grid;
	place-items: center;

	img {
		width: 100%;
		max-height: 584px;
		object-fit: cover;
		height: auto;
	}
}
</style>