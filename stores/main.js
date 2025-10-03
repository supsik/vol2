import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', () => {
	const currentPopup = ref(null);
	const menuOpened   = ref(false);
	const isLoading    = ref(true);

	const togglePopup  = popup => currentPopup.value = `Popups${popup}`;

	const closePopup   = () => currentPopup.value = null;
	
  const setLoader    = param => isLoading.value = param;

  return {
		isLoading,
		setLoader,
		menuOpened,
		closePopup,
		togglePopup,
		currentPopup,
	}
})