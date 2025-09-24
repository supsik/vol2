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
							type : 'Row',
							ext  : 'Image',
							path : '/pins/south_park.png',
							sizes    : {
								width  : 555,
								height : 590,
								top    : 165,
								left   : 520,
							}
						},
						{
							name : 'marader',
							type : 'Row',
							ext  : 'Image',
							path : '/pins/murder.png',
							sizes    : {
								width  : 555,
								height : 590,
								top    : 165,
								left   : 520,
							}
						},
						{
							name : 'manhunt',
							type : 'Row',
							ext  : 'Image',
							path : '/pins/manhunt.png',
							sizes    : {
								width  : 555,
								height : 590,
								top    : 165,
								left   : 520,
							}
						},
						{
							name : 'jihad',
							type : 'Row',
							ext  : 'Image',
							path : '/pins/jihad_girl.png',
							sizes    : {
								width  : 555,
								height : 590,
								top    : 165,
								left   : 520,
							}
						},
						{
							name : 'jihad_mlya',
							type : 'Row',
							ext  : 'Image',
							path : '/pins/dimidrol_ya_hui_znaet.png',
							sizes    : {
								width  : 555,
								height : 590,
								top    : 165,
								left   : 520,
							}
						},
						{
							name : 'scull',
							type : 'Row',
							ext  : 'Image',
							path : '/pins/scull.png',
							sizes    : {
								width  : 555,
								height : 590,
								top    : 165,
								left   : 520,
							}
						},
						{
							name : 'cross',
							type : 'Row',
							ext  : 'Image',
							path : '/pins/cross_drain.png',
							sizes    : {
								width  : 555,
								height : 590,
								top    : 165,
								left   : 520,
							}
						}
					]
				},
				{ 
					name    : 'user_files',
					type    : 'Folder',
					content : [
						{
							name    : 'about_me',
							type    : 'Row',
							ext     : 'TextDoc',
							content : `
								<h2>Всем привет, меня зовут Хасан!</h2>
								<p>Я фронтенд разработчик с города Владикавказ. Занимаюсь разработкой больше трёх лет.</p>
								<p>Всё что вы видите на данном ресурсе сделано мной с нуля. От дизайна до разработки сайта.</p>
								<p>Если хотите со мной связаться, можете написать мне в телеграм: <a href='https://t.me/comradesteve'>@comradesteve</a></p>
								<p>Также вы можете следить за жизнью проекта в моём тг канале: <a href='https://t.me/five_prod'>@five_prod<a></p>
							`,
							sizes    : {
								width  : 590,
								height : 460,
								top    : 165,
								left   : 520,
							}
						},
						{
							name : 'resume',
							type : 'Row',
							ext  : 'Pdf',
							path : 'resume.pdf',
							sizes    : {
								width  : window.innerWidth,
								height : window.innerHeight,
								top    : 0,
								left   : 0,
							}
						},
					]
				},
				{ 
					name     : 'music',
					type     : 'Folder',
					content  : [
						{
							name : 'Пошлая Молли - Супермаркет',
							type : 'Row',
							ext  : 'Music',
							content  : {
								title  : 'Пошлая Молли - Супермаркет',
								path   : '/music/Molly/music.mp3',
							},
						},
					],
				}
			]
		}
	])

	return { fileSystem }
})
