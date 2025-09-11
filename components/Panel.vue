<template>
	<div class="panel">
		<img src="/icons/logo.svg" alt="" class="panel__logo">
		<div class="panel__apps">
			<button v-for="app in mainStore.appsArray" :key="app.name" :class="{
					'radio-btn': app.icon == 'RadioApp',
					'is-open': app.isOpen,
					'is-current': mainStore.currentApp == app.name,
				}"
				@click="changeAppStatus(app)"
			>
				<img :src="`icons/apps/${app.icon}.svg`" alt="">
			</button>
		</div>
		<div class="panel__right">
			<button class="collapse-all-apps">
				<img src="/icons/collapse_all.svg" alt="">
			</button>
			<time>23:05</time>
		</div>
	</div>
</template>
<script setup>
const mainStore = useMainStore();

const changeAppStatus = app => {
	if (!app.isOpen)
		app.isOpen = true;

	if (mainStore.currentApp != app.name) {
		mainStore.setCurrentApp(app.name);

		if (app.isCollapse)
			app.isCollapse = false;
	} else {
		app.isCollapse = !app.isCollapse;
		mainStore.setCurrentApp(mainStore.appsArray.find(el => !el.isCollapse).name);
	}
}
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

.radio-btn {
	position: relative;
	top: -2px;
}
</style>