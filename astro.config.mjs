// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'DegiDoc',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/' }
			],
			sidebar: [
				{
					label: 'Inicio',
					items: [
						{ label: 'Bienvenida', link: '/' },
					],
				},
				{
					label: 'HTML 🦥',
					items: [
						{ label: 'Introducción a HTML', link: '/guides/html/introduction/' },
						{ label: 'Estructura básica', link: '/guides/html/basic-structure/' },
						{ label: 'Estilos de Texto', link: '/guides/html/text-styling/' },
						{ label: 'Elementos y etiquetas', link: '/guides/html/elements-tags/' },
						{ label: 'Formularios', link: '/guides/html/forms/' },
						{ label: 'Vinculos e imágenes', link: '/guides/html/links-images/' },
						{ label: 'Listas', link: '/guides/html/lists/' },
						{ label: 'Tablas', link: '/guides/html/tables/' },
						{ label: 'Multimedia', link: '/guides/html/multimedia/' },
						{ label: 'Metadatos SEO', link: '/guides/html/meta-seo/' },
						{ label: 'HTML5 y semántica', link: '/guides/html/html5-semantic/' },

					],
				},
				{
					label: 'CSS',
					collapsed: true,
					items: [
						{ label: 'Introducción a CSS', link: '/guides/css/introduction/' },
						{ label: 'Selectores', link: '/guides/css/selectors/' },
						{ label: 'Modelo de caja', link: '/guides/css/box-model/' },
						{ label: 'Flexbox', link: '/guides/css/flexbox/' },
						{ label: 'Grid', link: '/guides/css/grid/' },
						{ label: 'Responsive Design', link: '/guides/css/responsive/' },
						{ label: 'Animaciones', link: '/guides/css/animations/' },
						{ label: 'Variables CSS', link: '/guides/css/variables/' },
					],
				},
				{
					label: 'Referencia',
					collapsed: true,
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
