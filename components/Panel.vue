<template>
	<div class="panel">
		<img src="/icons/logo.svg" alt="" class="panel__logo">
		<div class="panel__apps">
		</div>
		<div class="panel__right">
			<button class="collapse-all-apps">
				<img src="/icons/collapse_all.svg" alt="">
			</button>
			<time>23:05</time>
		</div>
	</div>
</template>
<script setup>
</script>
<style lang='scss'>
.panel {
	width: 100%;
	height: 36px;
	padding-inline: 24px;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	bottom: 0;
	z-index: 10;
	background-color: #060700;
	padding-inline: 24px;
}

.panel__logo {
	width: 28px;
	height: 16px;
}

.panel__right {
	time {
		font-size: 12px;
		font-family: 'Hasklig';
		color: #FFF;
	}

	.collapse-all-apps {
		width: 10px;
		height: 10px;
		margin-right: 24px;
		opacity: .3;

		&:hover { opacity: 1 }
	}
}
</style>