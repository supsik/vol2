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
			v-model="fields.login"
		/>
		<input
			type="password"
			placeholder="Пароль"
			name="password"
			id="password"
			v-model="fields.password"
		/>
		<input
			type="password"
			placeholder="Повторите пароль"
			name="retry-password"
			id="retry-password"
			v-model="fields.retryPassword"
		/>
		<input
			type="text"
			placeholder="Введите имя пользователя"
			name="name"
			id="name"
			v-model="fields.user_name"
		/>
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

const fields = ref({
	login          : '',
	password      : '',
	retryPassword : '',
	user_name     : '',
})

const register = async () => {
	const hasEmptyFields = Object.keys(fields.value).some(key => !fields.value[key].trim());

	if (hasEmptyFields)
		return console.error('Вы заполнили не все данные');
	else if (fields.value.password != fields.value.retryPassword)
		return console.error('Пароли не совпадают');
	if (fields.value.password.length < 6)
		return console.error('Длина пароля должна быть минимум 6 символов');

	try {
		const data = await useClientRequest('/api/register', {
			method: 'POST',
			body: {
				login      : fields.value.login,
				password   : fields.value.password,
				user_name  : fields.value.user_name,
			}
		})

		token.value = data.token;
		window.location.reload();
	} catch (error) {
		throw new Error('Что-то пошло не так: ', error);
	}
}
</script>
<style lang="scss"></style>
