<template>
	<div class="panel">
		<button @click="mainStore.menuOpened = !mainStore.menuOpened">
			<SvgoLogo class="panel__logo"/>
		</button>
		<div class="panel__apps">
			<button v-for="app in appStore.appsArray" :key="app.name" :class="{
					'radio-btn': app.name == 'Radio Player',
					'is-open': app.isOpen,
					'is-current': appStore.currentApp == app.name,
				}"
				@click="changeAppStatus(app)"
			>
				<img :src="app.icon" alt="">
			</button>
		</div>
		<div class="panel__right">
			<button class="collapse-all-apps" @click="collapseAll()">
				<SvgoCollapseAll />
			</button>
			<time>{{ time }}</time>
		</div>
		<section
			class="panel__menu"
			ref="menu"
			v-if="mainStore.menuOpened"
		>
			<button class="panel__profile" @click="checkUser">
				<p class="user_name" v-if="userStore.user">{{ userStore.user.name }}</p>
				<SvgoProfile />
			</button>
		</section>
	</div>
</template>
<script setup>
import { onClickOutside } from '@vueuse/core';
const { collapseAll } = useApp();
const mainStore       = useMainStore();
const userStore       = useUserStore();
const appStore        = useAppStore();

const time = ref(null);
const menu = ref(null);
let timer;

const checkUser = () => {
	if (!userStore.user)
		mainStore.togglePopup('login')
}

const changeAppStatus = app => {
	if (!app.isOpen)
		app.isOpen = true;

	if (appStore.currentApp != app.name) {
		appStore.setCurrentApp(app.name);

		if (app.isCollapse)
			app.isCollapse = false;
	} else {
		app.isCollapse = !app.isCollapse;
		appStore.setCurrentApp(appStore.appsArray.find(el => !el.isCollapse && el.isOpen)?.name || null);
	}
}

const updateTime = () => {
  const now     = new Date();
  const hours   = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  time.value = `${hours}:${minutes}`;
}

onClickOutside(menu, () => {
	mainStore.menuOpened = false;
});

onMounted(() => timer = setInterval(updateTime, 1000));

onUnmounted(() => clearInterval(timer));
</script>
<style lang='scss'>
.panel {
	width: 100%;
	height: 36px;
	padding-inline: 24px;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	bottom: 0;
	z-index: 10;
	background-color: #060700;
	padding-inline: 24px;
}

.panel__logo {
	width: 28px;
	height: 16px;
	margin: 0;
}

.panel__right {
	time {
		font-size: 12px;
		font-family: 'Hasklig';
		color: #FFF;
	}

	.collapse-all-apps {
		width: 10px;
		height: 10px;
		margin-right: 24px;
		opacity: .3;

		&:hover { opacity: 1 }

		svg {
			width: 10px;
			height: 10px;
			margin: 0;
		}
	}
}

.panel__apps {
	display: flex;
	height: 100%;

	button {
		width: 50px;
		height: 100%;
		position: relative;

		&.is-open::after {
			content: '';
			bottom: 0;
			width: 100%;
			height: 2px;
			position: absolute;
			display: block;
			z-index: 3;
			background-color: #344000;
		}

		&.is-current { background-color: #2e370080 }

		&:hover { background-color: #2e370033 }
	}
}

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
	}
}

.radio-btn img {
	position: relative;
	top: -2px;
}
</style>