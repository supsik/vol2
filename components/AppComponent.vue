<template>
	<div
		@mousemove="handleMouseMove"
		class="app-wr"
		:style="!appProps.sizes.isFullscreen ?
		{
			maxHeight:	`${appProps.sizes.height}px`,
			maxWidth:	`${appProps.sizes.width}px`,
			transform: `translateY(${appProps.sizes.top}px) translateX(${appProps.sizes.left}px)`,
			transition: 'max-width 0.3s ease, max-height 0.3s ease',
		} :
		{
			transition: 'max-width 0.3s ease, max-height 0.3s ease, transform 0.3s ease',
		}"
	>
		<div class="app__header" @mousedown="handleMouseDown" @mouseup="handleMouseUp">
			<img src="/icons/logo.svg" alt="fvprod" class="app__logo">
			<span>{{ appProps.name }}</span>
			<div class="app__panel">
				<button class="app__panel-btn">
					<img src="/icons/collapse.svg" alt="">
				</button>
				<button class="app__panel-btn" @click="appProps.sizes.isFullscreen = !appProps.sizes.isFullscreen">
					<img src="/icons/fullscreen.svg" alt="">
				</button>
				<button class="app__panel-btn btn-close">
					<img src="/icons/cross.svg" alt="">
				</button>
			</div>
		</div>
		<slot />	
	</div>
</template>
<script setup>
const isDragging = ref(false);

const touchPos = reactive({
	xPos: 0,
	yPos: 0,
});

const props = defineProps({
	appProps: Object,
})

const handleMouseDown = event => {
	isDragging.value = true;

	touchPos.xPos = event.x;
	touchPos.yPos = event.y;
}

const handleMouseMove = event => {
	if (!isDragging.value || props.appProps.sizes.isFullscreen) return;

	const { xPos: touchX, yPos: touchY } = touchPos;

	const deltaX = event.x - touchX;
  const deltaY = event.y - touchY;

	props.appProps.sizes.left	+= deltaX
	props.appProps.sizes.top	+= deltaY

	touchPos.xPos = event.x;
  touchPos.yPos = event.y;
}

const handleMouseUp = event => {
	isDragging.value = false
}
</script>
<style lang='scss'>
.app-wr {
	width: 100%;
	height: 100%;
	max-width: 100%;
	max-height: calc(100% - 36px);
	display: flex;
	flex-direction: column;
	font-size: 12px;
	color: #FFF;
	background-color: rgba($color: #000000, $alpha: .5);
}

.app__header {
	width: 100%;
	height: 36px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 24px;
	background-color: rgba($color: #000000, $alpha: .6);
	user-select: none;
	font-family: 'Montserrat';
	font-size: 14px;
}

.app__logo { pointer-events: none }

.app__panel { height: 100% }

.app__panel-btn {
	width: 56px;
	height: 100%;
	opacity: .3;

	&.btn-close:hover { background-color: #660000 }

	&:hover { opacity: 1 }
}
</style>