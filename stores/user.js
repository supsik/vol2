import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
	const user = ref(null);

	const setUser = userData => {
		user.value = {
			name: userData.name
		}
	};

	return {
		user,
		setUser,
	}
})