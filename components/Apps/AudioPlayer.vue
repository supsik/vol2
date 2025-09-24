<template>
	<div class="audio-wr">
		<audio ref="audio" src="/music/Molly/music.mp3" />
		<div class="audio__content">
			<img width="120" height="120" src="/music/Molly/banner.png" alt="">
			<h2>Супермаркет - Пошлая Молли</h2>
			<div class="scrollbar"></div>
			<div class="timer">3:33/4:00</div>
		</div>
		<div class="audio__panel">
			<button class="prev"></button>
			<button class="play"></button>
			<button class="next"></button>
		</div>
	</div>
</template>
<script setup>
const audio = ref();

onMounted(() => {
	audio.value.volume = .2;
})
</script>
<style lang='scss'>
.audio-wr {
	height: calc(100% - 36px);
	position: relative;
}

.audio__content {
	padding: 18px;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Minecraft';
	font-weight: 400;

	h2 {
		margin-top: 10px;
		line-height: 24px;
		font-weight: 400;
		font-size: 12px;
	}

	.scrollbar {
		margin-top: 6px;
		width: 120px;
		height: 1px;
		background-color: #FFF;
	}

	.timer {
		margin-top: 12px;
		font-size: 10px;
		line-height: 24px;
	}
}

.audio__panel {
	width: 100%;
	height: 34px;
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 32px;
	background-color: rgba($color: #000000, $alpha: .5);
}
</style>