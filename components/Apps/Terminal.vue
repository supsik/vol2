<template>
	<div
		class="console__content-wr"
		ref="consoleBox"
	>
		<div class="console__content">
			<span
				class="message"
				v-for="msg in consoleHistory"
				v-html="msg.message"
			/>
		</div>
	</div>
	<label class="console__input-wr">
		<span>$oosa-player</span>
		<input
			type="text"
			@keydown.enter="submit"
		>
	</label>
</template>

<script setup>
const consoleBox = ref(null);

const consoleHistory = ref([
	{
		type: 'notification',
		message: `
		<p class="console__content-header">
			created by <a href="#">FIVEPRODSTUDIO</a>™
		</p>
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
***                    ***  **                                    </pre>`
	},
	{
		type: 'notification',
		message: 'type «help» to view command list'
	}
])

const { commandsArray } = useConsole(consoleHistory);

const submit = async event => {
	const message = event.target.value;

	consoleHistory.value.push({
		type: 'notification',
		message: `$oosa-player> ${message}`
	})

	const command = commandsArray.value.find(el => el.name == message);

	if (command) 
		command.method();

	else if (message)
		consoleHistory.value.push({
			type: 'notification',
			message: `command «${message}» not found type «help» to view command list`
		})

	event.target.value = '';

	await nextTick();
	consoleBox.value.scrollTop = consoleBox.value.scrollHeight;
}

const clearConsole = () => {
	consoleHistory.value = []
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

.console__content-header a { color: $lightGreen }

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

.message span { color: $lightGreen; }
</style>