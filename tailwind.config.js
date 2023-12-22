/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/**/**/*.{js,ts,jsx,tsx,css}",
    ],
    theme: {
        extend: {
            colors: {
                'blue-light-sm': '#379AB4',
                'blue-light-xs': '#9AC2CD',
                'purple': '#9B2693',
                'orange-light': '#FF8E17',
                'orange-dark': '#E8731D',
            }
        },

    },
    plugins: [],
}

