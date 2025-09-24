<template>
	<div class="files-app-wr">
		<button class="files__item" @click="openMediaApp">
			<div class="files__img-box">
				<img :src="appIcon" alt="" :class="`app-icon app-icon-${appData.extension}`">
			</div>
			<span>{{ appName }}</span>
		</button>
	</div>
</template>
<script setup>
const appStore   = useAppStore();

const props = defineProps({
	appData: {
		type      : Object,
		required  : true,
	},
});

const appIcon = ref(getFileIcon(props.appData.ext));

const appName = ref(`${props.appData.name}.${getFileExtension(props.appData.ext)}`);

const openMediaApp = () => { 
	appStore.appsArray.push({
		name        : props.appData.name,
		component   : props.appData.ext == 'Musik' ? 'AudioPlayer' : 'OffApp',
		type        : props.appData.ext == 'Musik' ? 'AudioPlayer' : 'OffApp',
		icon        : props.appData.name,
		isOpen      : true,
		isCollapse  : false,
		appData     : props.appData,
		sizes: {
			isFullscreen  : false,
			height        : props.appData.sizes.height,
			width         : props.appData.sizes.width,
			left          : props.appData.sizes.left,
			top           : props.appData.sizes.top,
		},
	});

	appStore.setCurrentApp(props.appData.name);
}
</script>
<style lang='scss'>

</style>