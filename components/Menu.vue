<template>
	<section
		class="panel__menu"
		ref="menu"
	>
		<button class="panel__profile" @click="checkUser">
			<p class="user_name" v-if="userStore.user">{{ userStore.user.userName }}</p>
			<SvgoProfile />
		</button>
	</section>
</template>
<script setup>
import { onClickOutside } from '@vueuse/core';

const mainStore  = useMainStore();
const userStore  = useUserStore();

const menu = ref(null);

const checkUser = () => {
	userStore.user ? mainStore.togglePopup('Profile') : mainStore.togglePopup('Login');
	
	mainStore.menuOpened = false;
}

onClickOutside(menu, () => mainStore.menuOpened = false);
</script>
<style lang='scss'>
.panel__menu {
	width: 320px;
	height: 360px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding: 14px;
	position: absolute;
	left: 0;
	bottom: 36px;
	background-color: rgba($color: #000000, $alpha: .6);

	.panel__profile {
		display: flex;
		align-items: center;
		gap: 12px;

		button {
			width: 16px;
			height: 16px;
		}

		p {
			font-family: "Montserrat-light";
			font-size: 16px;
		}

		svg { margin: 0 }
	}
}
</style>