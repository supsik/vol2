<template>
	<div>
		<audio ref="audio" muted autoplay src="/music/Molly/music.mp3"></audio>
	</div>
</template>
<script setup>
const audio = ref(null);

onMounted(() => {
	audio.value.volume = .3;
})
</script>
<style lang='scss'>

</style>