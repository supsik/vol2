<template>
  <div @contextmenu="customMenu">
    <div class="main-frame">
      <slot />
    </div>
    <Panel />
    <Transition name="fade">
      <Loader v-if="mainStore.isLoading" />
    </Transition>
    <ClientOnly>
      <CustomCursor />
    </ClientOnly>
		<div class="popup" v-if="mainStore.currentPopup">
			<button class="close-popup" @click="mainStore.closePopup()">
				<SvgoCross />
			</button>
			<component :is='popupsMap[mainStore.currentPopup]' />
		</div>
  </div>
</template>
<script setup>
import PopupsProfile from '@/components/Popups/Profile.vue';
import PopupsLogin   from '@/components/Popups/Login.vue';

const popupsMap = {
	PopupsProfile,
  PopupsLogin,
}

const mainStore = useMainStore();

const customMenu = e => e.preventDefault();
</script>
<style lang="scss">
.main-frame {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: $darkGreen;
}

.popup {
	width: auto;
	min-width: 200px;
	height: auto;
	min-height: 72px;
	position: absolute;
	z-index: 10;
	top: 50%;
	left: 50%;
	display: flex;
	flex-direction: column;
	background-color: rgba($color: #000000, $alpha: .5);
	transform: translate(-50%, -50%);

	.close-popup {
		position: absolute;
		top: 14px;
		right: 24px;

		svg {
			width: 10px;
			height: 10px;
		}
	}
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
