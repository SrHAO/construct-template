// @ts-check

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// El dominio se resuelve en este orden: SITE_URL (env) -> produccion de Vercel
// (VERCEL_PROJECT_PRODUCTION_URL) -> demo local. Vercel inyecta la segunda
// variable sola, asi que canonical/sitemap/og siguen al dominio que conectes
// en el dashboard sin tocar codigo.
const SITE_URL =
	process.env.SITE_URL ??
	(process.env.VERCEL_PROJECT_PRODUCTION_URL
		? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
		: 'https://constru-demo.mx');

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	i18n: {
		locales: ['es', 'en'],
		defaultLocale: 'es',
		// El enrutado es manual (src/pages/[lang]/) y siempre incluye el prefijo.
		// Sin esto Astro sirve 'es' en la raiz, redirige /es/ -> / y el 404 aparece
		// en desarrollo, aunque el build estatico sea correcto.
		routing: {
			prefixDefaultLocale: true,
		},
	},
	redirects: {
		'/': '/es',
	},
	integrations: [react(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});