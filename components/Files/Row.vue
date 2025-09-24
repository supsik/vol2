<template>
	<div class="files-app-wr">
		<button class="files__item" @click="openApp">
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

const appSizes = ref(getFileSizes(props.appData.ext));
const appIcon  = ref(getFileIcon(props.appData.ext));
const appName  = ref(`${props.appData.name}.${getFileExtension(props.appData.ext)}`);

const openApp  = () => {
	if (props.appData.ext == 'Music') {
		appStore.appsArray.find(el => el.name == 'Audio Player').isOpen = true;
		appStore.setCurrentApp('Audio Player');
	}

	else {
		appStore.appsArray.push({
			name        : props.appData.name,
			component   : 'OffApp',
			type        : 'OffApp',
			icon        : `/icons/files/${props.appData.ext}.svg`,
			isOpen      : true,
			isCollapse  : false,
			appData     : props.appData,
			sizes       : appSizes,
		});
		appStore.setCurrentApp(props.appData.name);
	}
}
</script>
<style lang='scss'>

</style>