<template>
	<NuxtLayout>
		<div class="">
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
import AudioPlayer  from '@/components/Apps/AudioPlayer.vue';
import AppsFiles    from '@/components/Apps/Files.vue';
import OffApp       from '@/components/Apps/OffApp.vue';

const mainStore = useAppStore();

const componentsMap = {
  AppsTerminal,
	AudioPlayer,
	AppsFiles,
	OffApp,
}
</script>
<style lang='scss'>
</style>