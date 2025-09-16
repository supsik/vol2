export function useConsole(consoleHistory) {
	const mainStore = useAppStore();

	const commandsArray = ref([
		{
			name: 'help',
			method: () => {
				const helpMessage =
`<pre>Available commands list:

<span>clear </span>         | clear the console
<span>help </span>          | show commands list
<span>close_all </span>     | close all apps</pre>`;
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