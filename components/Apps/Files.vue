<template>
	<div class="files__content-wr">
		<ul class="files__list">
			<li v-for="item in filesStore.fileSystem" :key="item.name">
				<component
					:is="FilesMap[`Files${item.type}`]"
					:appData="item"
				/>
			</li>
		</ul>
	</div>
</template>
<script setup>
import FilesFolder from '@/components/Files/Folder.vue';
import FilesApp    from '@/components/Files/App.vue';

const filesStore = useFilesStore();

const FilesMap = {
  FilesFolder,
	FilesApp,
}
</script>
<style lang='scss'>
.files__content-wr { padding: 18px 24px }

.files__list:not(.files__list:first-child) {
	margin-left: 24px;
	max-height: 0;
	overflow: hidden;

	&.visible { max-height: unset }
}

.folder-item { margin-top: 18px }

.files__item {
	display: flex;
	align-items: center;
	gap: 12px;
	font-family: inherit;
	font-size: inherit;

	.files__img-box {
		width: 22px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>