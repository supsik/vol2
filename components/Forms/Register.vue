<template>
	<form 
		class="login-form" 
		action="/"
		method="get" 
		@submit.prevent="register"
	>
		<input type="text" placeholder="Логин" name="login" id="login" v-model="fields.name" />
		<input type="password" placeholder="Пароль" name="password" id="password" v-model="fields.password" />
		<input
			type="password"
			placeholder="Повторите пароль"
			name="retry-password"
			id="retry-password"
			v-model="fields.retryPassword"
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
	name          : '',
	password      : '',
	retryPassword : '',
})

const register = async () => {
	if (!fields.value.name || !fields.value.password || !fields.value.retryPassword)
		return console.error('Не заполнены данные');
	else if (fields.value.password != fields.value.retryPassword)
		return console.error('Пароли не совпадают');
	if (fields.value.password.length < 6)
		return console.error('Длина пароля должна быть минимум 6 символов');

	try {
		const data = await useClientRequest('/api/register', {
			method: 'POST',
			body: {
				name     : fields.value.name,
				password : fields.value.password,
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
