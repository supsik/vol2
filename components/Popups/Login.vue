<template>
	<div class="login-wr">
		<FormsLogin v-if="authMode == 'login'" @switchMode="switchMode"/>
		<FormsRegister v-if="authMode == 'register'" @switchMode="switchMode"/>
	</div>
</template>
<script setup>
const authMode = ref('login');

const switchMode = value => authMode.value = value;
</script>
<style lang='scss'>
.login-wr { padding: 46px 60px 32px }

.login-form {
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Hasklig-Light';

	input {
		width: 260px;
		height: 34px;
		appearance: none;
		background-color: #1A1E00 !important;
		padding-left: 10px;
		font-family: inherit;
		font-size: 14px;
	}

	input + input { margin-top: 20px }

	button {
		padding: 6px 20px;
		background-color: #516300;
		margin-top: 20px;
		font-size: 14px;
		font-family: inherit;
	}

	p {
		margin-top: 14px;
		font-size: 10px;

		span {
			color: #516300;
			text-decoration: underline;
		}
	}
}
</style>