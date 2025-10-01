export const useClientRequest = (request, opts = {}) => {
	const baseURL = useRuntimeConfig().public.API_URL;
	const token   = useCookie('token');

	const options = {
		baseURL,
		headers: {
			'Authorization': `Basic ${token.value || ''}`
		},
		...opts,
	};

	return $fetch(request, options);
};