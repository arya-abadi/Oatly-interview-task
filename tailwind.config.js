module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
        './storybook/**/*.{js,ts,jsx,tsx}',
        './**/*.stories.{js,ts,jsx,tsx}'
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
                'heading-tablet': ['6rem', { lineHeight: '1' }],
                'heading-mobile': ['3rem', { lineHeight: '1' }],
                'prelude-mobile': ['1.25rem', { lineHeight: '1.6' }],
                'paragraph-mobile': ['0.875rem', { lineHeight: '1.5' }]
            },
        },
    },
    plugins: [],
}
