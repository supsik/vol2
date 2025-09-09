<template>
	<NuxtLayout>
		<div @mousemove="handleMouseMove">
			<AppComponent
				v-for="app in appsArray"
				:key="app.name"
				:appProps="app"
			>
				<component :is='app.component'></component>
			</AppComponent>
		</div>
	</NuxtLayout>
</template>
<script setup>
const appsArray = reactive({
	consoleProps: {
		name:          "Terminal",
		component:     resolveComponent('AppsTerminal'),
		sizes: {
			isFullscreen  : false,
			height        : 620,
			width         : 1024,
			left	        : 120,
			top		        : 70,
		}
	},
})
</script>
<style lang='scss'>
.main-frame {
	width: 100%;
	height: 100vh;
	overflow: hidden;
	background-color: $darkGreen;
}
</style>