/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			'4xs': '340px',
			'3xs': '375px',
			'2xs': '425px',
			xs: '500px',
			...defaultTheme.screens,
			'3xl': '1700px'
		},
		colors: {
			primary: 'var(--pico-primary)'
		},
		extend: {}
	},
	plugins: []
};
