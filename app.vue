<template>
	<NuxtLayout>
		<div class="main-frame">
			<AppComponent
				v-for="app in mainStore.appsArray"
				:key="app.name"
				:appProps="app"
			>
				<component :is='componentsMap[app.component]' :appData="app.appData"/>
			</AppComponent>
		</div>
	</NuxtLayout>
</template>
<script setup>
import AppsTerminal from '@/components/Apps/Terminal.vue';
import AppsFiles    from '@/components/Apps/Files.vue';
import OffApp       from '@/components/Apps/OffApp.vue';

const mainStore = useAppStore();

const componentsMap = {
  AppsTerminal,
	AppsFiles,
	OffApp
}
</script>
<style lang='scss'>
.main-frame {
	width: 100%;
	height: 100vh;
	overflow: hidden;
	background-color: $darkGreen;
}
</style>