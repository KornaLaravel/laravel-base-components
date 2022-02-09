const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const safelist = require('./tailwind-safelist-preset');

module.exports = {

    content: [
        './app/**/*.php',
        './resources/**/*.html',
        './resources/**/*.js',
        './resources/**/*.php',
        // './config/site.php',

        // vendor
        './vendor/rawilk/laravel-base/resources/js/**/*.js',
        './vendor/rawilk/laravel-base/src/**/*.php',
        './vendor/rawilk/laravel-base/resources/**/*.php',
        './vendor/rawilk/laravel-form-components/resources/js/*.js',
        './vendor/rawilk/laravel-form-components/src/**/*.php',
        './vendor/rawilk/laravel-form-components/resources/**/*.php',
        // './vendor/rawilk/laravel-breadcrumbs/resources/**/*.php',
    ],

    safelist: safelist.purge.safelist,

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),

        // vendor plugins
        require('./vendor/rawilk/laravel-base/resources/js/tailwind-plugins/alert'),
        require('./vendor/rawilk/laravel-base/resources/js/tailwind-plugins/badge'),
        require('./vendor/rawilk/laravel-base/resources/js/tailwind-plugins/button'),
    ],

    theme: {

        extend: {

            colors: {
                slate: colors.slate,
                gray: colors.gray,
                rose: colors.rose,
                orange: colors.orange,
                indigo: colors.indigo,
                pink: colors.pink,
                yellow: colors.yellow,
            },

            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },

            minWidth: {
                '0': '0',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                'full': '100%',
            },

            cursor: {
                grab: 'grab',
                grabbing: 'grabbing',
                help: 'help',
            },

            transitionTimingFunction: {
                css: 'ease',
            },

            zIndex: {
                top: '9999',
            },

        },

    },

};
