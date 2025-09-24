import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', () => {
	const appsArray = reactive([
		{
			name        : 'Terminal',
			component   : 'AppsTerminal',
			icon        : '/icons/apps/ConsoleApp.svg',
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
			icon        : '/icons/apps/FilesApp.svg',
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
			icon        : '/icons/apps/MediaApp.svg',
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
			icon        : '/icons/apps/RadioApp.svg',
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
		{
			name        : 'Audio Player',
			component   : 'AppsAudioPlayer',
			icon        : '/icons/apps/AudioApp.svg',
			isOpen      : false,
			isCollapse  : false,
			sizes: {
				isFullscreen  : false,
				width         : 480,
				height        : 290,
				top		        : 180,
				left	        : 420,
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
