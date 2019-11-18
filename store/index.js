import Vue from 'vue'
import Vuex from 'vuex'

// modules
// import error from './modules/error'
import app from './modules/app'
import shopifyThemeEditor from './modules/shopify-theme-editor'
// import auth from './modules/auth'
import catalog from './modules/catalog'
// import checkout from './modules/checkout'
// import account from './modules/account'
import cart from './modules/cart'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // error,
    app,
    shopifyThemeEditor,
    // auth,
    catalog,
    cart,
    // checkout,
    // account
  },
  strict: process.env.NODE_ENV !== 'production'
})
