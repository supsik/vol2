<template>
	<div class="files-app-wr">
		<button class="files__item">
			<div class="files__img-box">
				<img :src="appIcon" alt="" :class="`app-icon app-icon-${extension}`">
			</div>
			<span>{{ appName }}</span>
		</button>
	</div>
</template>
<script setup>
const props = defineProps({
	extension: {
		type      : String,
		required  : true,
	},
	name: {
		type      : String,
		required  : true,
	},
});

const appIcon = ref(getFileIcon(props.extension));

const appName = ref(`${props.name}.${getFileExtension(props.extension)}`);

</script>
<style lang='scss'>

</style>