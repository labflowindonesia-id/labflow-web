/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}" // Added src just in case future files are there
    ],
    theme: {
        extend: {
            colors: {
                phunk: {
                    cyan: '#00E5D1',
                    blue: '#25ADF9',
                    dark: '#0b0b0b',
                    gray: '#3E3D3D'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}
