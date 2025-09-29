<template>
	<form
		class="login-form"
		action="/"
		method="get"
		@submit.prevent="login"
	>
		<input type="text" placeholder="Логин" name="login" id="login" />
		<input type="password" placeholder="Пароль" name="password" id="password" />
		<button type="submit">Войти</button>
		<p>
			Нет учетной записи?
			<span cursor-pointer @click="emit('switchMode', 'register')">Присоединиться к системе</span>
		</p>
	</form>
</template>
<script setup>
const emit = defineEmits(['switchMode']);

const login = form => {
	const login     = form.srcElement[0].value;
	const passwpord = form.srcElement[1].value;

	if (login == 'admin' && passwpord == 'adminpass')
		alert('Ты че ебать самый умный?')
}
</script>
<style lang="scss"></style>
