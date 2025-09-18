import { defineStore } from 'pinia';

export const useFilesStore = defineStore('files', () => {
	const fileSystem = reactive([
		{
			name    : 'FiveProd',
			type    : 'Folder',
			content : [
				{
					name    : 'pins',
					type    : 'Folder',
					content : [
						{
							name : 'south_park',
							type : 'App',
							ext  : 'image',
							path : '/pins/south_park.png',
						},
						{
							name : 'manhunt',
							type : 'App',
							ext  : 'image',
							path : '/pins/manhunt.png',
						},
						{
							name : 'scull',
							type : 'App',
							ext  : 'image',
							path : '/pins/scull.png',
						},
						{
							name : 'cross',
							type : 'App',
							ext  : 'image',
							path : '/pins/cross_drain.png',
						}
					]
				},
				{ 
					name    : 'user_files',
					type    : 'Folder',
					content : [
						{
							name : 'swagga',
							type : 'App',
							ext  : 'textDoc',
						},
						{
							name : 'swagga2',
							type : 'App',
							ext  : 'image',
							path : '/pins/south_park.png',
						},
						{
							name : 'resume',
							type : 'App',
							ext  : 'pdf',
						},
					]
				},
				{
					name : 'logotip',
					type : 'App',
					ext  : 'svg',
					path : '/logo.svg',
				},
				{
					name : 'Musik1',
					type : 'App',
					ext  : 'musik',
				},
				{
					name : 'Vol1',
					type : 'App',
					ext  : 'video',
				},
			]
		}
	])

	return { fileSystem }
})
