<template>
	<NuxtLayout>
		<div class="main-frame">
			<AppComponent
				v-for="app in mainStore.appsArray"
				:key="app.name"
				:appProps="app"
			>
				<component :is='componentsMap[app.component]' />
			</AppComponent>
		</div>
	</NuxtLayout>
</template>
<script setup>
import AppsTerminal from '@/components/Apps/Terminal.vue'

const mainStore = useMainStore();

const componentsMap = {
  AppsTerminal,
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