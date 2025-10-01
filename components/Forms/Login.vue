<template>
	<form
		class="login-form"
		action="/"
		method="get"
		@submit.prevent="login"
	>
		<input type="text" placeholder="Логин" name="login" id="login" v-model="formFields.login" />
		<input type="password" placeholder="Пароль" name="password" id="password" v-model="formFields.password" />
		<button type="submit">Войти</button>
		<p>
			Нет учетной записи?
			<span cursor-pointer @click="emit('switchMode', 'register')">Присоединиться к системе</span>
		</p>
	</form>
</template>
<script setup>
const emit = defineEmits(['switchMode']);
const token = useCookie('token');

const formFields = ref({
	login    : '',
	password : '',
})

const login = async () => {
	if (formFields.value.login == 'admin' && formFields.value.password == 'adminpass') {
		alert('Ты че ебать самый умный?')
		return
	}

	try {
		const { token: userToken} = await useClientRequest('/api/login', {
			method: "POST",
			body: {
				login    : formFields.value.login,
				password : formFields.value.password,
			}
		});

		console.log(userToken);

		token.value = userToken;
		window.location.reload();
	} catch(error) {
	}
}
</script>
<style lang="scss"></style>
