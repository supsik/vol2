<template>
	<form 
		class="login-form" 
		action="/"
		method="get" 
		@submit.prevent="register"
	>
		<input
			type="text"
			placeholder="Логин"
			name="login"
			id="login"
			v-model="formFields.login"
		/>
		<input
			type="password"
			placeholder="Пароль"
			name="password"
			id="password"
			v-model="formFields.password"
		/>
		<input
			type="password"
			placeholder="Повторите пароль"
			name="retry-password"
			id="retry-password"
			v-model="formFields.retryPassword"
		/>
		<input
			type="text"
			placeholder="Введите имя пользователя"
			name="name"
			id="name"
			v-model="formFields.user_name"
		/>
		<ul class="error-messages" v-if="errorMessages.length">
			<li v-for="error in errorMessages">
				{{ error }}
			</li>
		</ul>
		<button type="submit">Присоединиться</button>
		<p>
			Уже есть учетная запись?
			<span cursor-pointer @click="emit('switchMode', 'login')">Войти в систему</span>
		</p>
	</form>
</template>
<script setup>
const token = useCookie('token');

const emit = defineEmits(['switchMode']);

const formFields = ref({
	login         : '',
	password      : '',
	retryPassword : '',
	user_name     : '',
})

const errorMessages = ref([]);

const register = async () => {
	const hasEmptyformFields = Object.keys(formFields.value).some(key => !formFields.value[key].trim());

	errorMessages.value = [];

	if (hasEmptyformFields)
		return errorMessages.value.push('Вы заполнили не все данные');
	else if (formFields.value.password != formFields.value.retryPassword)
		return errorMessages.value.push('Пароли не совпадают');
	if (formFields.value.password.length < 6)
		return errorMessages.value.push('Длина пароля должна быть минимум 6 символов');

	try {
		const data = await useClientRequest('/api/register', {
			method: 'POST',
			body: {
				login      : formFields.value.login,
				password   : formFields.value.password,
				user_name  : formFields.value.user_name,
			}
		})

		token.value = data.token;
		window.location.reload();
	} catch (error) {
		throw new Error('Что-то пошло не так: ', error);
	}
}
</script>
<style lang="scss">
</style>
