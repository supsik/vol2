import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const isLoading = ref(true);

	const appsArray = reactive([
		{
			name        : 'Terminal',
			component   : 'AppsTerminal',
			isOpen      : true,
			isCollapse  : false,
			sizes: {
				isFullscreen  : false,
				height        : 620,
				width         : 1024,
				left	        : 120,
				top		        : 70,
			}
		},
	])

  const setLoader = (param: boolean) => isLoading.value = param;

  return {
		isLoading,
		appsArray,
		setLoader
	}
})