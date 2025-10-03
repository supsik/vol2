<template>
  <div @contextmenu="customMenu">
		<div class="login-popup" v-if="isOpen">
			<button class="close-popup" @click="mainStore.togglePopup('login')">
				<SvgoCross />
			</button>
			<FormsLogin v-if="authMode == 'login'" @switchMode="switchMode"/>
			<FormsRegister v-if="authMode == 'register'" @switchMode="switchMode"/>
		</div>
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
  </div>
</template>
<script setup>
const mainStore = useMainStore();

const authMode = ref('login')

const isOpen = mainStore.getPopupState('login');

const customMenu = e => e.preventDefault();

const switchMode = value => {
	authMode.value = value;
}
</script>
<style lang="scss">
.main-frame {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: $darkGreen;
}

.login-popup {
	width: 380px;
	padding-block: 46px 24px;
	position: absolute;
	z-index: 999;
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
	}

	.login-form {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: 'Hasklig-Light';

		input {
			width: 260px;
			height: 34px;
			appearance: none;
			background-color: #1A1E00 !important;
			padding-left: 10px;
			font-family: inherit;
			font-size: 14px;
		}

		input + input { margin-top: 20px }

		button {
			padding: 6px 20px;
			background-color: #516300;
			margin-top: 20px;
			font-size: 14px;
			font-family: inherit;
		}

		p {
			margin-top: 14px;
			font-size: 10px;

			span {
				color: #516300;
				text-decoration: underline;
			}
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
