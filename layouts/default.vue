<template>
	<div>
		<slot />
	</div>
	<Panel />
	<Transition name="fade">
		<Loader v-if="mainStore.isLoading"/>
	</Transition>
</template>
<script setup>
const mainStore = useMainStore();

console.log(mainStore);

</script>
<style lang='scss'>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>