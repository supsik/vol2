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
							ext  : 'Image',
							path : '/pins/south_park.png',
						},
						{
							name : 'marader',
							type : 'App',
							ext  : 'Image',
							path : '/pins/murder.png',
						},
						{
							name : 'manhunt',
							type : 'App',
							ext  : 'Image',
							path : '/pins/manhunt.png',
						},
						{
							name : 'jihad',
							type : 'App',
							ext  : 'Image',
							path : '/pins/jihad_girl.png',
						},
						{
							name : 'jihad_mlya',
							type : 'App',
							ext  : 'Image',
							path : '/pins/dimidrol_ya_hui_znaet.png',
						},
						{
							name : 'scull',
							type : 'App',
							ext  : 'Image',
							path : '/pins/scull.png',
						},
						{
							name : 'cross',
							type : 'App',
							ext  : 'Image',
							path : '/pins/cross_drain.png',
						}
					]
				},
				{ 
					name    : 'user_files',
					type    : 'Folder',
					content : [
						{
							name    : 'about_me',
							type    : 'App',
							ext     : 'TextDoc',
							content : `
								<h2>Всем привет, меня зовут Хасан!</h2>
								<p>Я фронтенд разработчик с города Владикавказ. Занимаюсь разработкой больше трёх лет.</p>
								<p>Всё что вы видите на данном ресурсе сделано мной с нуля. От дизайна до разработки сайта.</p>
								<p>Если хотите со мной связаться, можете написать мне в телеграм: <a href='https://t.me/comradesteve'>@comradesteve</a></p>
								<p>Также вы можете следить за жизнью проекта в моём тг канале: <a href='https://t.me/five_prod'>@five_prod<a></p>
							`
						},
						{
							name : 'resume',
							type : 'App',
							ext  : 'Pdf',
							path : 'resume.pdf'
						},
					]
				}
			]
		}
	])

	return { fileSystem }
})
