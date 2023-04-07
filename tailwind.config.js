/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'turquoise-dark': '#2B7A70',
                'carbon': '#2E2E2E',
                'carbon-light': '#393939',
                'white-light': '#ecf0f1'
            }
        },
    },
    safelist: ["bg-green-800", "bg-yellow-600", "bg-orange-700", "bg-red-800", "bg-lime-700"],
    plugins: [],
};
