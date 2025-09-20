<template>
	<div class="off-app-wr">
		<component
			:is='componentsMap[appData.ext]'
			:content="appData.content"
			:path="appData.path"
		/>
	</div>
</template>
<script setup>
import TextDoc from '@/components/OffApp/TextDoc.vue';
import Image   from '@/components/OffApp/Image.vue';
import Pdf     from '@/components/OffApp/Pdf.vue';

const props = defineProps({
	appData: {
		type      : Object,
		required  : true,
	}
})

const componentsMap = {
	TextDoc,
	Image,
	Pdf
}
</script>
<style lang='scss'>
.off-app-wr {
	height: calc(100% - 36px);
	display: flex;

	img {
		width: 100%;
		aspect-ratio: 1;
		max-height: 584px;
		object-fit: cover;
		margin: auto;
	}
}
</style>