// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: "FiveProd",
		},
	},

	compatibilityDate: "2025-07-15",

	css: ["assets/scss/index.scss"],

	devtools: { enabled: true },

	modules: ['@pinia/nuxt'],

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