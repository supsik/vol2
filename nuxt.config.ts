// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: "FiveProd",
		},
	},

	runtimeConfig: {
		BD_HOST: process.env.BD_HOST,
		BD_USER: process.env.BD_USER,
		BD_PASSWORD: process.env.BD_PASSWORD,
		BD_DATABASE: process.env.BD_DATABASE,
	},

	compatibilityDate: "2025-07-15",

	css: ["assets/scss/index.scss"],

	ssr: false,

	devtools: { enabled: false },

	modules: ["@pinia/nuxt"],

	devServer: { port: 8080 },

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "assets/scss/_variables.scss" as *;`,
				},
			},
		},
	},
});
