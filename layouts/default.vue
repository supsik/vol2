<template>
	<div class="main-frame">
		<slot />
	</div>
	<Panel />
	<Transition name="fade">
		<Loader v-if="mainStore.isLoading"/>
	</Transition>
	<ClientOnly>
		<CustomCursor />
	</ClientOnly>
</template>
<script setup>
const mainStore = useMainStore();
</script>
<style lang='scss'>
.main-frame {
	width: 100%;
	height: 100vh;
	overflow: hidden;
	background-color: $darkGreen;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>