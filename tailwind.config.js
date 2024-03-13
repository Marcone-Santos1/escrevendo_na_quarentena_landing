/** @type {import('tailwindcss').Config} */

import WithMT from "@material-tailwind/react/utils/withMT";

export default WithMT({
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
})

