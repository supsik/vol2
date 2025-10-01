export const useRequest = (request, opts = {}) => {
	const baseURL = useRuntimeConfig().public.REQUEST_API;
	const token = btoa(`admin:adminpass`);
	const phpsessid = useCookie('PHPSESSID');

	const options = {
		baseURL,
		headers: {
			'Authorization': `Basic ${token}`,
			'Cookie': `PHPSESSID=${phpsessid.value};`,
		},
		...opts,
	};

	return useFetch(request, options);
};