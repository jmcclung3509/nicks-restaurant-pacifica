
export default {
  content: [ 
     "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./app.vue",
  "./error.vue",],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import ('tailwindcss').Config} */

module.exports = {
	contents: [
		"./assets/**/*.{vue,js,css}",
		"./components/**/*.{vue,js}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
	],
	theme: {
		screens: {
			xs: "375px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		extend: {
			fontSize: {
				"sm": ["1rem", "1.25"],
				"2xl": ["2rem", "1.25"],
				"3xl": ["2.5rem", "1.25"],
				"4xl": ["3rem", "1.25"],
				"5xl": ["3.5rem", "1.25"],
				"6xl": ["3.75rem", "1.5"],
			},
		},
		colors: {
			"dark-blue": "#384960",
		},
	},
};
