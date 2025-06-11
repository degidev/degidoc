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
					label: 'JavaScript',
					collapsed: true,
					items: [
						{ label: '1. Introducción a JavaScript', link: '/guides/javascript/introduction/' },
						{ label: '2. Sintaxis y estructura básica', link: '/guides/javascript/syntax/' },
						{ label: '3. Variables y constantes', link: '/guides/javascript/variables/' },
						{ label: '4. Tipos de datos', link: '/guides/javascript/data-types/' },
						{ label: '5. Operadores', link: '/guides/javascript/operators/' },
						{ label: '6. Estructuras de control', link: '/guides/javascript/control-structures/' },
						{ label: '7. Funciones', link: '/guides/javascript/functions/' },
						{ label: '8. Arrays', link: '/guides/javascript/arrays/' },
						{ label: '9. Objetos', link: '/guides/javascript/objects/' },
						{ label: '10. Cadenas de texto', link: '/guides/javascript/strings/' },
						{ label: '11. Manipulación del DOM', link: '/guides/javascript/dom/' },
						{ label: '12. Eventos', link: '/guides/javascript/events/' },
						{ label: '13. Formularios y validaciones', link: '/guides/javascript/forms/' },
						{ label: '14. JSON y almacenamiento local', link: '/guides/javascript/storage/' },
						{ label: '15. Programación asíncrona', link: '/guides/javascript/async/' },
						{ label: '16. Clases y POO', link: '/guides/javascript/oop/' },
						{ label: '17. Módulos', link: '/guides/javascript/modules/' },
						{ label: '18. Expresiones regulares', link: '/guides/javascript/regex/' },
						{ label: '19. Manejo de errores', link: '/guides/javascript/error-handling/' },
						{ label: '20. Fetch API', link: '/guides/javascript/fetch-api/' }
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
