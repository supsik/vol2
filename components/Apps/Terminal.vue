<template>
	<div class="console__content-wr">
		<p class="console__content-header">created by <a href="#">FIVEPRODSTUDIO</a>™</p>
		<pre class="console__content-star">
                            **                ************       
                          ****          *********************    
                       ******                     ***********    
                    *********                    *********       
    *************************************       *******          
        ***************************           ******             
           ******************              *****                 
        ******************              ****                     
      ********************         *****                         
   ******           *****      ****                              
***                   **    **                                   </pre>
		<div class="console__content">
			<span class="message" v-for="msg in consoleHistory">
				{{ msg.message }}
			</span>
		</div>
	</div>
	<label class="console__input-wr">
		<span>$oosa-player</span>
		<input type="text" @keydown.enter="submit">
	</label>
</template>

<script setup>
const consoleHistory = ref([
	{
		type: 'notification',
		message: 'type «help» to view command list'
	}
])

const commandsArray = ref(['test', 'help', 'coupon', 'shutdown'])

const submit = event => {
	const message = event.target.value;

	if (!commandsArray.value.includes(message))
		consoleHistory.value.push({
			type: 'notification',
			message: `command «${message}» not found type «help» to view command list`
		})
	event.target.value = ''
}
</script>

<style lang='scss'>
.console__content-wr {
	flex: 1;
	padding: 12px 16px 12px;
	overflow-y: scroll;
	font-family: 'Hasklig-Light';
	line-height: 16px;

	&::-webkit-scrollbar { width: 13px }
	&::-webkit-scrollbar-track { background-color: rgba($color: #000000, $alpha: .3) }
	&::-webkit-scrollbar-thumb { background-color: #111500 }
}

.console__content-header {
	a {
		color: $lightGreen;
	}
}

.console__content-star {
	margin-block: 32px;
	color: $lightGreen;
	font-size: 10px;
}

.console__content {
	display: flex;
	flex-direction: column;
	gap: 14px;
}

.console__input-wr {
	width: 100%;
	height: 36px;
	padding-inline: 16px;
	display: flex;
	gap: 10px;
	align-items: center;
	background-color: rgba($color: #000000, $alpha: .5);

	span {
		flex-basis: 96px;
		font-family: 'Hasklig-Bold';
		color: $lightGreen;
	}

	input {
		width: 100%;
		font-size: 12px;
		font-family: 'Hasklig-Light';
		caret-color: $lightGreen;
	}
}
</style>