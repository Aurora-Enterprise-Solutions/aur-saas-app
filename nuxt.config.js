import colors from 'vuetify/es5/util/colors'
import localeMessages from './src/static/locales'

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: true,

    server: {
        port : 3000,
        host : '0.0.0.0',
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title : 'Aurora SaaS',
        meta  : [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],

        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@aurora-enterprise-solutions/aur-styles/aur-styles.css',
        '@/assets/styles/styles.scss',
        'remixicon/fonts/remixicon.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '@/plugins/global-mixins', mode: 'client' },
        { src: '@/plugins/masonry', mode: 'client' },
        // '@/plugins/mq',
        // { src: '@/plugins/persisted-state', mode: 'client' },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/i18n',
        '@nuxtjs/auth-next',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'es',
        },
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables : [  ],
        theme           : {
            dark   : false,
            themes : {
                dark: {
                    primary   : colors.blue.darken2,
                    accent    : colors.grey.darken3,
                    secondary : colors.amber.darken3,
                    info      : colors.teal.lighten1,
                    warning   : colors.amber.base,
                    error     : colors.deepOrange.accent4,
                    success   : colors.green.accent3,
                },
            },
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },

    router: {
        // middleware: 'auth',
        extendRoutes(routes, resolve) {

            routes.push( {
                name      : 'custom',
                path      : '*',
                component : resolve(__dirname, 'src/pages/login.vue'),
            } )

        },
    },

    srcDir: 'src/',

    i18n: {
        locales               : [ 'es' ],
        defaultLocale         : 'es',
        strategy              : 'prefix_and_default',
        detectBrowserLanguage : {
            useCookie : true,
            cookieKey : 'i18n_redirected',
        },

        vueI18n: {
            fallbackLocale : 'es',
            messages       : localeMessages,
        },
    },

    auth: {
        redirect: {
            login    : '/login',
            logout   : '/login',
            callback : false,
            home     : '/modules',
        },

        strategies: {
            local: {
                scheme : 'refresh',
                token  : {
                    property : 'tokens.access.token',
                    maxAge   : 3600,
                    required : true,
                    type     : 'Bearer',
                },

                refreshToken: {
                    property      : 'tokens.refresh.token',
                    data          : 'refreshToken',
                    maxAge        : 3600,
                    required      : true,
                    tokenRequired : false,
                },

                user: {
                    property  : 'user',
                    autoFetch : true,
                },

                endpoints: {
                    login   : { url: '/auth/login', method: 'post' },
                    refresh : { url: '/auth/refresh-tokens', method: 'post' },
                    user    : { url: '/auth/user', method: 'get' },
                    logout  : { url: '/auth/logout', method: 'get' },
                },

                autoLogout: false,
            },
        },
    },

    publicRuntimeConfig: {
        axios: {
            baseURL: process.env.NUXT_ENV_API_HOST,
        },
    },

    privateRuntimeConfig: {
    },
}
