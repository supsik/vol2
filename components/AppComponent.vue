<template>
	<div
		class="app-wr"
		v-if="appProps.isOpen"
		v-show="!appProps.isCollapse"
		@mousemove="handleMouseMove"
		@mousedown="mainStore.setCurrentApp(appProps.name)"
		:class="{
			'is-fullscreen': appProps.sizes.isFullscreen,
			'current-app'  : mainStore.currentApp == appProps.name,
		}"
		:style="appStyles"
	>
		<div
			class="app__header"
			@mousedown="handleMouseDown"
			@mouseup="handleMouseUp"
		>
			<SvgoLogo class="app__icon" />
			<span>{{ appProps.name }}</span>
			<div class="app__panel">
				<button
					class="app__panel-btn"
					@click="collapseApp(appProps)"
				>
					<SvgoCollapse class="svg-collapse"/>
				</button>
				<button
					class="app__panel-btn"
					@click="appProps.sizes.isFullscreen = !appProps.sizes.isFullscreen"
				>
					<SvgoFullscreen class="svg-fullscreen"/>
				</button>
				<button
					class="app__panel-btn btn-close"
					@click.stop="closeApp(appProps)" @mousedown.stop
				>
					<SvgoCross class="svg-close"/>
				</button>
			</div>
		</div>
		<slot />
	</div>
</template>
<script setup>
const { collapseApp, closeApp } = useApp(); 
const mainStore                 = useAppStore();

const isDragging = ref(false);

const touchPos   = reactive({
	xPos: 0,
	yPos: 0,
});

const appStyles  = computed(() => {
	return !props.appProps.sizes.isFullscreen ?
		{
			maxHeight  : `${props.appProps.sizes.height}px`,
			maxWidth   : `${props.appProps.sizes.width}px`,
			transform  : `translateY(${props.appProps.sizes.top}px) translateX(${props.appProps.sizes.left}px)`,
			transition : 'max-width 0.3s ease, max-height 0.3s ease',
		} :
		{
			transition : 'max-width 0.3s ease, max-height 0.3s ease, transform 0.3s ease',
		}
})

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

const handleMouseUp = () => isDragging.value = false;
</script>
<style lang='scss'>
.app-wr {
	width: 100%;
	height: 100%;
	max-width: 100%;
	max-height: calc(100% - 36px);
	position: absolute;
	display: flex;
	flex-direction: column;
	background-color: #070800;
	font-size: 12px;

	&.current-app {
		z-index: 5;
		background-color: #050600;
	}

	&.is-fullscreen {
		.off-app-wr {
			overflow-y: scroll;

			&::-webkit-scrollbar { width: 13px }
			&::-webkit-scrollbar-track { background-color: rgba($color: #000000, $alpha: .3) }
			&::-webkit-scrollbar-thumb { background-color: #111500 }

			img { max-height: unset }
		}
	}
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

	span {
		position: absolute;
		left: calc(50% - 28px);
		transform: translateX(-50%);
	}

	.app__icon {
		width: 21px;
		height: 12px;
		margin: 0;
	}
}

.app__panel {
	height: 100%;
	display: flex;
}

.app__panel-btn {
	width: 56px;
	height: 100%;
	opacity: .3;
	display: flex;

	.svg-collapse {
		position: relative;
		top: 4px;
	}

	&.btn-close:hover { background-color: #660000 }

	&:hover { opacity: 1 }

	svg {
		width: 10px;
		height: 10px;
		margin: auto;
	}
}

.app-fade-enter-active,
.app-fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.app-fade-enter-from,
.app-fade-leave-to {
  opacity: 0;
}
</style>