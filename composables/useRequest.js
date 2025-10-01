export const useRequest = (request, opts = {}) => {
	const baseURL = useRuntimeConfig().public.REQUEST_API;
	const token   = useCookie('user_token');
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