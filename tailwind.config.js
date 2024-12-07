/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'"Inter"',
					'ui-sans-serif',
					'system-ui',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
			},
			aria: {
				invalid: `invalid="true"`,
			},
			width: {
				sidebar: '16rem',
			},
		},
	},
	plugins: [],
};
