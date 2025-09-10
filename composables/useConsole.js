export function useConsole(consoleHistory) {
	const commandsArray = ref([
		{
			name: 'clear',
			method: () => {
				consoleHistory.value = [];
			},
		},
		{
			name: 'help',
			method: () => {
				const helpMessage =
`<pre>Available command list:

<span>clear</span>    | Clear the console
<span>help</span>     | Show this help message</pre>`;
				consoleHistory.value.push({
					type: 'notification',
					message: helpMessage,
				});
			},
		},
	]);

	return { commandsArray };
}