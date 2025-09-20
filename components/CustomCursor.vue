<script setup lang="ts">
const cursor = reactive({
	x: 0,
	y: 0,
	isHidden: false,
	type: "default",
});

const updateCursor = (e: MouseEvent) => {
	cursor.x = e.clientX;
	cursor.y = e.clientY;
	
	cursor.isHidden = cursor.x == window.innerWidth || cursor.y == 0;
};

const checkCursorVisibility = (e: MouseEvent) => {
	const target = e.target as HTMLElement;
	target.closest("button, a, select")
		? (cursor.type = "pointer")
		: (cursor.type = "default");

	const isInteractive = target.closest("input, textarea");
	cursor.isHidden = !!isInteractive;
};

onMounted(() => {
	window.addEventListener("mousemove", updateCursor);
	document.addEventListener("mouseover", checkCursorVisibility);
});

onUnmounted(() => {
	window.removeEventListener("mousemove", updateCursor);
	document.removeEventListener("mouseover", checkCursorVisibility);
});
</script>

<template>
	<svg
		width="12px"
		height="12px"
		class="custom-cursor"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		v-if="!cursor.isHidden && cursor.type == 'default'"
		:style="{
			left: `${cursor.x}px`,
			top: `${cursor.y}px`,
		}"
	>
		<path
			d="M20.5056 10.7754C21.1225 10.5355 21.431 10.4155 21.5176 10.2459C21.5926 10.099 21.5903 9.92446 21.5115 9.77954C21.4205 9.61226 21.109 9.50044 20.486 9.2768L4.59629 3.5728C4.0866 3.38983 3.83175 3.29835 3.66514 3.35605C3.52029 3.40621 3.40645 3.52004 3.35629 3.6649C3.29859 3.8315 3.39008 4.08635 3.57304 4.59605L9.277 20.4858C9.50064 21.1088 9.61246 21.4203 9.77973 21.5113C9.92465 21.5901 10.0991 21.5924 10.2461 21.5174C10.4157 21.4308 10.5356 21.1223 10.7756 20.5054L13.3724 13.8278C13.4194 13.707 13.4429 13.6466 13.4792 13.5957C13.5114 13.5506 13.5508 13.5112 13.5959 13.479C13.6468 13.4427 13.7072 13.4192 13.828 13.3722L20.5056 10.7754Z"
			stroke="#FFF"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
	<svg
		width="13px"
		height="13px"
		class="custom-cursor"
		viewBox="0 0 48 48"
		xmlns="http://www.w3.org/2000/svg"
		v-if="!cursor.isHidden && cursor.type == 'pointer'"
		:style="{
			left: `${cursor.x}px`,
			top: `${cursor.y}px`,
		}"
	>
		<path
			d="M38.1,16.1a4.8,4.8,0,0,0-2.7.2A4.9,4.9,0,0,0,31.2,14l-1.3.2A4.8,4.8,0,0,0,25.4,11h-1V7.2a5,5,0,0,0-5.8-5.1,5.1,5.1,0,0,0-4,5V21.9l-2.4-2.4A4.9,4.9,0,0,0,8.7,18a4.6,4.6,0,0,0-3.4,1.5,4.1,4.1,0,0,0-1.3,3,7.9,7.9,0,0,0,1.3,4C6.5,28.7,13.8,41.3,16,45a1.9,1.9,0,0,0,1.7,1H36.5a2,2,0,0,0,2-1.5l3.4-13.2a1.3,1.3,0,0,0,.1-.6V21.2A5.2,5.2,0,0,0,38.1,16.1ZM35.1,42H18.8c-2.7-4.5-9-15.5-10.1-17.5-.1-.2-1.1-1.8-.7-2.2l.7-.3a1.1,1.1,0,0,1,.7.3l5.8,6a2,2,0,0,0,3.3-1.4V7a1,1,0,0,1,2,0V21a1.9,1.9,0,0,0,1.9,2h0a2,2,0,0,0,2-2V16a1,1,0,0,1,1-1,1,1,0,0,1,.9,1v6a2,2,0,0,0,2,2h0a2,2,0,0,0,2-2V19a.9.9,0,0,1,.9-1,.9.9,0,0,1,1,1v5a2,2,0,0,0,2,2h0a1.9,1.9,0,0,0,1.9-2V21a1,1,0,0,1,2,0v9.5a1.3,1.3,0,0,1-.1.6Z"
			fill="#FFF"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>

<style scoped>
.custom-cursor {
	position: fixed;
	top: 0;
	left: 0;
	pointer-events: none;
	z-index: 9999;
	mix-blend-mode: difference;
}
</style>
