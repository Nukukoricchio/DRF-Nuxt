export default {
  mode: 'universal',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Ecoplot Pro',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '/vendor/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/vendor/css/animate.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/vendor/css/fontawesome-all.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/vendor/css/bootstrap-datepicker.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/vendor/css/bootstrap-select.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/vendor/css/jquery.mCustomScrollbar.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/vendor/css/owl.carousel.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/vendor/css/owl.theme.default.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/vendor/css/zimed-icon.css'
      },
      {
        rel: 'stylesheet',
        href: '/vendor/css/jquery.bxslider.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/vendor/css/magnific-popup.css'
      },
      {
        rel: 'stylesheet',
        href: '/vendor/css/style.css'
      },
      {
        rel: 'stylesheet',
        href: '/vendor/css/responsive.css'
      },
      {
        rel: 'stylesheet',
        href: '/vendor/css/main.css'
      },
      {
        rel: 'stylesheet',
        href: '/vendor/css/util.css'
      }
    ],
    script: [
      {
        src: '/vendor/js/jquery.min.js',
        body: true
      },
      {
        src: '/vendor/js/bootstrap.bundle.min.js',
        body: true
      },
      {
        src: '/vendor/js/TweenMax.min.js',
        body: true
      },
      {
        src: '/vendor/js/jquery.mCustomScrollbar.concat.min.js',
        body: true
      },
      {
        src: '/vendor/js/bootstrap-datepicker.min.js',
        body: true
      },
      {
        src: '/vendor/js/jquery.easing.min.js',
        body: true
      },
      {
        src: '/vendor/js/bootstrap-select.min.js',
        body: true
      },
      {
        src: '/vendor/js/jquery.validate.min.js',
        body: true
      },
      {
        src: '/vendor/js/waypoints.min.js',
        body: true
      },
      {
        src: '/vendor/js/wow.js',
        body: true
      },
      {
        src: '/vendor/js/jquery.counterup.min.js',
        body: true
      },
      {
        src: '/vendor/js/owl.carousel.min.js',
        body: true
      },
      {
        src: '/vendor/js/jquery.bxslider.min.js',
        body: true
      },
      {
        src: '/vendor/js/jquery.magnific-popup.min.js',
        body: true
      },
      {
        src: '/vendor/js/jquery.ajaxchimp.min.js',
        body: true
      },
      {
        src: '/vendor/js/theme.js',
        body: true
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // Template css
    '@/assets/css/custom.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    //{ src: '~plugins/auth.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/stylelint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/auth'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    //baseURL: 'http://127.0.0.1:8000/api/',
    baseURL: 'https://ecoplot.sinka.vn/api/',
    credentials: true
  },
  /*
   ** Content module configuration
   ** See https://dev.auth.nuxtjs.org/schemes/local.html#usage
   */
  auth: {
    strategies: {
      local: {
        token: {
          property: 'access',
          maxAge: 1800
        },
        endpoints: {
          login: {
            url: 'auth/token',
            method: 'post',
            propertyName: 'access'
          },
          user: {
            url: 'user/info',
            method: 'get',
            propertyName: 'user',
            autoFetch: false
          },
          logout: false
        },
        autoLogout: true
      },
      facebook: {
        scope: ['public_profile', 'email'],
        client_id: '243690313831103',
        response_type: 'code',
        access_token_endpoint: 'https://ecoplot.sinka.vn/api/social/login/facebook',
        //userinfo_endpoint: 'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}',
        userinfo_endpoint: 'https://ecoplot.sinka.vn/api/user/info'
      },
      google: {
        scope: ['profile', 'email'],
        client_id: '111472263931-brunv34ilcb1h29kaje9jbcblkhqpd05.apps.googleusercontent.com',
        response_type: 'code',
        access_token_endpoint: 'https://ecoplot.sinka.vn/api/social/login/google',
        userinfo_endpoint: 'https://ecoplot.sinka.vn/api/user/info'
      }
    },
    watchLoggedIn: true,
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/'
    },
    plugins: [{ src: '~/plugins/auth.js', mode: 'client' }]
  },
  toast: {
    position: 'top-right',
    duration: 4000
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
