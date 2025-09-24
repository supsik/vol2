export function useApp() {
	const mainStore = useAppStore();

	const collapseApp = app => {
		app.isCollapse = !app.isCollapse;
		const closestApp = mainStore.appsArray.find(el => !el.isCollapse && el.isOpen)?.name
		mainStore.setCurrentApp(closestApp || null);
	}

	const collapseAll = () => {
		mainStore.appsArray.map(el => el.isCollapse = true);
		mainStore.setCurrentApp(null);
	}

	const closeApp = app => {
		if (app.type != 'OffApp')
			app.isOpen = !app.isOpen
		else {
			const index = mainStore.appsArray.findIndex(el => el === app);
			index !== -1 && mainStore.appsArray.splice(index, 1);
		}

		const closestApp = mainStore.appsArray.find(el => !el.isCollapse && el.isOpen)?.name
		mainStore.setCurrentApp(closestApp || null);
	}

	return { collapseApp, closeApp, collapseAll };
}