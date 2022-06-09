module.exports = {
	purge: ["./**/*.js", "./**/*.jsx"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				lucida: ["lucida", "sans-serif"],
			},
			container: {
				center: true,
				padding: "2rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("daisyui")],
};
