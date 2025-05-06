module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Oswald', 'sans-serif'],
                prelude: ['Courier Prime', 'monospace'],
                paragraph: ['Courier Prime', 'monospace'],
            },
            fontSize: {
                heading: ['9rem', { lineHeight: '1' }],
                prelude: ['1.5rem', { lineHeight: '1.6' }],
                paragraph: ['1rem', { lineHeight: '1.5' }],
            },
        },
    },
    plugins: [],
}
