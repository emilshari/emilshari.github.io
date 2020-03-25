
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, 
     
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'black' },
  /*
  ** Global CSS
  */
  css: [
    "~/assets/sass/style.sass", 
    "~/assets/sass/_fonts.scss"
  
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [ 
    {src: "~/plugins/global.js" }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/style-resources"
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  
  }, 
  styleResources: {
    scss: ["~/assets/sass/_fonts.scss"]
  },
  server:
    process.env.NODE_ENV !== "development"
      ? {
          port: 8000,
          host: "176.53.163.207"
        }
      : {
          port: 8000,
          host: "192.168.1.61"
        }
}
