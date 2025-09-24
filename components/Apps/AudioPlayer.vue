<template>
	<div class="">

		<audio ref="audio" src="/music/Molly/music.mp3" />
	</div>
</template>
<script setup>
const audio = ref();

onMounted(() => {
	audio.value.volume = .2;
})
</script>
<style lang='scss'>

</style>