/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#00ff41",
                surface: "#111318",
                outline: "#3b4b37",
            },
            fontFamily: {
                headline: ["Space Grotesk", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
