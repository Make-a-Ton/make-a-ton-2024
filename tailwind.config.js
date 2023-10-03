/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            'clash-semi': ['ClashDisplay-Semibold', 'sans-serif'],
            'clash-bold': ['ClashDisplay-Bold', 'sans-serif'],
            'satoshi-regular': ['Satoshi-Regular', 'sans-serif'],
            'satoshi-italic': ['Satoshi-Italic', 'sans-serif'],
            'satoshi-medium': ['Satoshi-Medium', 'sans-serif'],
            'satoshi-bold': ['Satoshi-Bold', 'sans-serif'],

        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            rotate: {
                '20': '-20deg',
            },
            keyframes: {
                shake: {
                    '25%': { transform: 'translateX(-5px)' },
                    '50%': { transform: 'translateX(5px)' },
                    '75%': { transform: 'translateX(-5px)' },
                },
            },
            animation: {
                shake: 'shake 1.5s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}
