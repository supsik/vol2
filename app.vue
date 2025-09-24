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
import AppsAudioPlayer  from '@/components/Apps/AudioPlayer.vue';
import AppsTerminal     from '@/components/Apps/Terminal.vue';
import AppsFiles        from '@/components/Apps/Files.vue';
import OffApp           from '@/components/Apps/OffApp.vue';

const mainStore = useAppStore();

// const { data } = await useFetch('/api/users'); // Запрос к серверу

const componentsMap = {
  AppsTerminal,
	AppsAudioPlayer,
	AppsFiles,
	OffApp,
}
</script>
<style lang='scss'>
</style>