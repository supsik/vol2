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

const token = useCookie('token');

const userStore = useUserStore();
const mainStore = useAppStore();

const componentsMap = {
  AppsTerminal,
	AppsAudioPlayer,
	AppsFiles,
	OffApp,
}

onMounted(async () => {
	if (token.value) {
		try {
			const { user } = await useClientRequest('/api/user');
			console.log(user);
			
			userStore.setUser(user);
		} catch (e) {
			console.log("Не удалось получить данные о пользователе", e);	
		}
	}
})
</script>
<style lang='scss'>
</style>