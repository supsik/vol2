import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', () => {
	const appsArray = reactive([
		{
			name        : 'Terminal',
			component   : 'AppsTerminal',
			icon        : 'ConsoleApp',
			isOpen      : true,
			isCollapse  : false,
			sizes: {
				isFullscreen  : false,
				height        : 620,
				width         : 1024,
				left          : 120,
				top           : 70,
			}
		},
		{
			name        : 'Files',
			component   : 'AppsFiles',
			icon        : 'FilesApp',
			isOpen      : false,
			isCollapse  : false,
			sizes: {
				isFullscreen  : false,
				height        : 620,
				width         : 480,
				left	        : 130,
				top		        : 80,
			}
		},
		{
			name        : 'Media Player',
			component   : 'AppsMediaPlayer',
			icon        : 'MediaApp',
			isOpen      : false,
			isCollapse  : false,
			sizes: {
				isFullscreen  : false,
				height        : 620,
				width         : 1024,
				left	        : 140,
				top		        : 90,
			}
		},
		{
			name        : 'Radio Player',
			component   : 'AppsRadioPlayer',
			icon        : 'RadioApp',
			isOpen      : false,
			isCollapse  : false,
			sizes: {
				isFullscreen  : false,
				height        : 620,
				width         : 1024,
				left	        : 150,
				top		        : 100,
			}
		},
	])

  const currentApp = ref(appsArray[0].name);

	const setCurrentApp = app => currentApp.value = app;

	return {
		setCurrentApp,
		currentApp,
		appsArray,
	}
})
