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
`<pre>Available commands list:

<span>clear</span>    | Clear the console
<span>help</span>     | Show commands list</pre>`;
				consoleHistory.value.push({
					type: 'notification',
					message: helpMessage,
				});
			},
		},
	]);

	return { commandsArray };
}