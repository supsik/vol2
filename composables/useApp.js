export function useApp() {
	const mainStore = useMainStore();

	const collapseApp = app => {
		app.isCollapse = !app.isCollapse;
		const closestApp = mainStore.appsArray.find(el => !el.isCollapse && el.isOpen)?.name
		mainStore.setCurrentApp(closestApp || null);
	}

	const closeApp    = app => {
		app.isOpen = !app.isOpen;
		const closestApp = mainStore.appsArray.find(el => !el.isCollapse && el.isOpen)?.name
		mainStore.setCurrentApp(closestApp || null);
	}

	return { collapseApp, closeApp };
}