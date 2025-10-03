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
		<Menu v-if="mainStore.menuOpened" />
	</div>
</template>
<script setup>
const { collapseAll } = useApp();
const mainStore       = useMainStore();
const appStore        = useAppStore();

const time = ref(null);
let timer;

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

.radio-btn img {
	position: relative;
	top: -2px;
}
</style>