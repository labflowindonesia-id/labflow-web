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
                },
                labblue: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7', // Warna utama dashboard
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                turnkey: ['Turnkey', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}
