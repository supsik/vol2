<template>
	<form
		class="login-form"
		action="/"
		method="get"
		@submit.prevent="login"
	>
		<input type="text" placeholder="Логин" name="login" id="login" v-model="formFields.login" />
		<input type="password" placeholder="Пароль" name="password" id="password" v-model="formFields.password" />
		<ul class="error-messages" v-if="errorMessages.length">
			<li v-for="error in errorMessages">
				{{ error }}
			</li>
		</ul>
		<button type="submit">Войти</button>
		<p>
			Нет учетной записи?
			<span cursor-pointer @click="emit('switchMode', 'register')">Присоединиться к системе</span>
		</p>
	</form>
</template>
<script setup>
const token = useCookie('token');

const emit = defineEmits(['switchMode']);

const errorMessages = ref([]);

const formFields = ref({
	login    : '',
	password : '',
})

const login = async () => {
	const hasEmptyFields = Object.keys(formFields.value).some(key => !formFields.value[key].trim());

	errorMessages.value = [];

	if (hasEmptyFields) {
		errorMessages.value.push('Введены не все данные');
		return;
	} else if (formFields.value.login == 'admin' && formFields.value.password == 'adminpass') {
		alert('Ты че ебать самый умный?');
		return;
	}

	try {
		const { token: userToken, error} = await useClientRequest('/api/login', {
			method: "POST",
			body: {
				login    : formFields.value.login,
				password : formFields.value.password,
			}
		});

		token.value = userToken;
		window.location.reload();
	} catch (e) {
		console.log(e);
	}
}
</script>
<style lang="scss">
</style>
