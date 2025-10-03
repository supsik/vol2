import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
	const user = ref(null);

	const setUser = userData => {
		user.value = {
			createDate  : userData.create_date,
			userName    : userData.user_name,
		}
	};

	return {
		user,
		setUser,
	}
})