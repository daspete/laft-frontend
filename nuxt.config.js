module.exports = {

    // set the global title, meta tags and styles
    head: {
        titleTemplate: '%s | APP NAME',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
        ]
    },

    router: {
        // Let's set our global middlewares for the routes
        middleware: ['auth']
    },

    render: {
        bundleRenderer: {
            // Let's cache our views
            cache: require('lru-cache')({
                max: 1000,
                maxAge: 1000 * 60 * 15
            }),

            // Let's preload scripts, css and fonts before showing the content
            shouldPreload: (file, type) => {
                return [
                    'script',
                    'style',
                    'font'
                ].includes(type)
            }
        }
    },

    // include our global CSS styles
    css: ['~/assets/css/main.css'],

    build: {
        // Let's use axios as our XHR tool
        vendor: ['axios']
    }
}