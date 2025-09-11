export function useConsole(consoleHistory) {
	const mainStore = useMainStore();

	const commandsArray = ref([
		{
			name: 'help',
			method: () => {
				const helpMessage =
`<pre>Available commands list:

<span>clear</span>       | Clear the console
<span>help</span>        | Show commands list
<span>close_all</span>   | Close all apps</pre>`;
				consoleHistory.value.push({
					type: 'notification',
					message: helpMessage,
				});
			},
		},
		{
			name: 'clear',
			method: () => consoleHistory.value = [],
		},
		{
			name: 'close_all',
			method: () => {
				mainStore.appsArray.map(el => el.isOpen = false);
				mainStore.setCurrentApp(null);
			},
		},
	]);

	return { commandsArray };
}