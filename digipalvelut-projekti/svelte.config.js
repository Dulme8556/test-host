import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		appDir: 'app',
		adapter: adapter(),
		paths: {
			base: '/test-host'
		},
	},
	preprocess: vitePreprocess()
};

export default config;