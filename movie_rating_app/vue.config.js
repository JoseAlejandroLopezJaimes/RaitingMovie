module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/' /*  para el servidor estatico coloque */
      : '/',

  "transpileDependencies": [
    "vuetify"
  ]
}
