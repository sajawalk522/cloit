/* eslint-disable no-dupe-keys */
// quasar.conf.js

module.exports = function (ctx) {
    return {
      // Quasar App Configuration: https://quasar.dev/quasar-cli/quasar-conf-js
      ctx,
  
      // app boot file (/src/boot)
      // --> boot files are part of "main.js"
      boot: [],
  
      // Quasar plugins
      plugins: [],
  
      // css: {
      //   import: [],
      // },
  
      // Quasar style configuration
      // (https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css)
      css: [
        'app.scss'
      ],
  
      // Quasar build options
      build: {
        vueRouterMode: 'history', // available values: 'hash', 'history'
        // transpile: false,
  
        // Add dependencies for transpiling with Babel (Array of string/regex)
        // (from node_modules, which are by default not transpiled).
        // Applies only if "transpile" is set to true.
        // transpileDependencies: [],
  
        // rtl: false, // https://quasar.dev/options/rtl-support
        // preloadChunks: true,
        // showProgress: false,
        // gzip: true,
        // analyze: true,
  
        // Options below are automatically set depending on the env, set them if you want to override
        // extractCSS: false,
  
        // https://quasar.dev/quasar-cli/handling-webpack
        extendWebpack(cfg) {
          // cfg.module.rules.push({
          //   enforce: 'pre',
          //   test: /\.(js|vue)$/,
          //   loader: 'eslint-loader',
          //   exclude: /node_modules/,
          // });
        }
      },
  
      // quasar dev server settings
      devServer: {
        // https: true,
        // port: 8080,
        open: true // opens browser window automatically
      },
  
      // animations: 'all', // --- includes all animations
      // https://quasar.dev/options/animations
      animations: [],
  
      // https://quasar.dev/quasar-cli/developing-ssr/configuring-ssr
      ssr: {
        pwa: false
      },
  
      // https://quasar.dev/quasar-cli/developing-pwa/configuring-pwa
      pwa: {
        workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
        workboxOptions: {}, // only for GenerateSW
        manifest: {
          name: 'Quasar App',
          short_name: 'Quasar App',
          description: 'A Quasar Framework app',
          display: 'standalone',
          orientation: 'portrait',
          background_color: '#ffffff',
          theme_color: '#027be3',
          icons: [
            {
              src: 'icons/icon-128x128.png',
              sizes: '128x128',
              type: 'image/png'
            },
            {
              src: 'icons/icon-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'icons/icon-256x256.png',
              sizes: '256x256',
              type: 'image/png'
            },
            {
              src: 'icons/icon-384x384.png',
              sizes: '384x384',
              type: 'image/png'
            },
            {
              src: 'icons/icon-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      },
  
      // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
      // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-dev
      // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-pwa
      // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-ssr
      // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
  
      // leave this here for Quasar CLI
      framework: {
        iconSet: 'material-icons', // Quasar icon set
        lang: 'en-us', // Quasar language pack
  
        // Possible values for "all":
        // * 'auto' - Auto-import needed Quasar components & directives
        // * false  - Manually specify what to import
        // * true   - Import everything from Quasar
        all: true,
  
        // Components you want to use go here
        components: [],
        directives: [],
  
        // Quasar plugins
        plugins: []
      },
  
      // animations: 'all', // --- includes all animations
      // https://quasar.dev/options/animations
      animations: []
    }
  }
  