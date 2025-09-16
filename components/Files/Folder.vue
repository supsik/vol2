<template>
	<div class="folder-wr">
		<button class="files__item" @click="isCollapsed = !isCollapsed">
			<img src="/icons/files/folder__closed.svg" alt="" class="folder-icon">
			<span>{{ name }}</span>
		</button>
		<ul class="files__list" :class="{'visible': !isCollapsed}">
			<li
				v-for="item in content"
				:key="item.name"
			>
				<component
					class="folder-item"
					:is="FilesMap[`Files${item.type}`]"
					:content="item.content"
					:name="item.name"
					:extension="item.ext"
				/>
			</li>
		</ul>
	</div>
</template>
<script setup>
import FilesFolder from '@/components/Files/Folder.vue';
import FilesApp    from '@/components/Files/App.vue';

const FilesMap = {
  FilesFolder,
	FilesApp
}

const isCollapsed = ref(true);

const props = defineProps({
	name: {
		type      : String,
		required  : true,
	},
	content: {
		type      : Array,
		required  : true,
	}
})
</script>
<style lang='scss'>
.folder-wr {
	font-family: 'Montserrat';
	font-size: 12px;
}
</style>