<template>
	<div class="loader">
		<div class="loader__content">
			<img src="/icons/logo.svg" alt="fvprod" class="app__logo">
			<div class="loader__bar">
				<span v-for="step in progress" />
			</div>
		</div>
	</div>
</template>
<script setup>
const mainStore = useMainStore();

const progress  = ref(0);

onMounted(() => {
	const interval = setInterval(() => {
		if (progress.value < 20)
			progress.value++;
		else
		{
			clearInterval(interval);
			setTimeout(() => mainStore.setLoader(false), 1000)
		}
	}, 75);
})
</script>
<style lang='scss'>
.loader {
	inset: 0;
	display: grid;
	place-items: center;
	position: absolute;
	z-index: 10;
	background-color: $darkGreen;
}

.loader__content {
	width: fit-content;
	height: fit-content;
	position: relative;
	top: 5%;
	text-align: center;

	img {
		width: 160px;
		height: 92px;
	}
}

.loader__bar {
	width: 204px;
	height: 20px;
	margin-top: 70px;
	padding: 2px;
	display: flex;
	gap: 2px;
	border: 1px solid #FFF;

	span {
		width: 8px;
		height: 14px;
		background-color: #2E3700;
	}
}
</style>