import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', () => {
  const isLoading   = ref(true);
	const menuOpened  = ref(false);

	const popupsArray = reactive([
		{
			name   : 'login',
			opened : false,
		},
	]);

	const togglePopup = popup => {
		const target = popupsArray.find(el => el.name == popup);
		if (target)
			target.opened = !target.opened;
	};

  const setLoader   = param => isLoading.value = param;

	const getPopupState = popup => computed(() => popupsArray.find(el => el.name === popup)?.opened || false);

  return {
		isLoading,
		setLoader,
		menuOpened,
		popupsArray,
		togglePopup,
		getPopupState,
	}
})