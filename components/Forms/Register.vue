<template>
  <form 
		class="login-form" 
		action="/"
		method="get" 
		@submit.prevent="register"
	>
    <input type="text" placeholder="Логин" name="login" id="login" />
    <input type="password" placeholder="Пароль" name="password" id="password" />
    <input
      type="password"
      placeholder="Повторите пароль"
      name="retry-password"
      id="retry-password"
    />
    <button type="submit">Присоединиться</button>
    <p>
      Уже есть учетная запись?
      <span cursor-pointer @click="emit('switchMode', 'login')">Войти в систему</span>
    </p>
  </form>
</template>
<script setup>
const emit = defineEmits(['switchMode']);

const register = async event => {
	const name          = event.srcElement[0].value;
	const password      = event.srcElement[1].value;
	const retryPassword = event.srcElement[2].value;
	
	if (!name || !password || !retryPassword)
		return console.error('Не заполнены данные');
	else if (password != retryPassword)
		return console.error('Пароли не совпадают');

	const { data } = await useClientRequest('/api/register', {
		method: 'POST',
		body: {
			name,
			password,
		}
	});

	if (!data.success)
		console.error("Произошла ошибка при регистрации");
}
</script>
<style lang="scss"></style>
