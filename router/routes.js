// Index page
import Index from '../pages/index.vue'

// Account page(s)
import Account from '~/pages/account/index.vue'
import AccountAddresses from '~/pages/account/addresses/index.vue'
import AccountAddress from '~/pages/account/addresses/_id.vue'
import AccountAddressNew from '~/pages/account/addresses/new.vue'
import AccountOrders from '~/pages/account/orders/index.vue'
import AccountOrder from '~/pages/account/orders/_id.vue'
import AccountPersonalData from '~/pages/account/PersonalData.vue'
import AccountPassword from '~/pages/account/password.vue'

// Authorization page(s)
import Auth from '~/pages/auth/Index.vue'
import AuthActivateAccount from '~/pages/auth/ActivateAccount.vue'
import AuthLogin from '~/pages/auth/Login.vue'
import AuthRegister from '~/pages/auth/Register.vue'
import AuthRecoverPassword from '~/pages/auth/RecoverPassword.vue'
import AuthResetPassword from '~/pages/auth/ResetPassword.vue'

// Product page(s)
import Product from '~/pages/Product.vue'
// const Products = () => import('~/views/Products.vue')

// Collection page(s)
import Collection from '~/pages/Collection.vue'
// const Collection = () => import('~/pages/Collection.vue')

// Cart page
import Cart from '~/pages/Cart.vue'
// const Menu = () => import('~/views/Menu.vue')
// const Search = () => import('~/views/Search.vue')
import Search from '~/pages/Search.vue'
import Error404 from '~/pages/Error404.vue'
// const Faq = () => import('~/views/Faq.vue')
// const ReferralShare = () => import('~/views/ReferralShare.vue')


export const routes = [
  /**
   * Index route
   */
  {
    path: '/',
    name: 'index',
    component: Index
  },
  /**
   * Authorization route(s)
   */
  {
    path: '/account/activate/:customerId/:activationToken',
    name: 'activate',
    component: AuthActivateAccount
  },
  {
    path: '/account/login',
    name: 'auth',
    component: AuthLogin
  },
  {
    path: '/account/register',
    name: 'register',
    component: AuthRegister
  },
  {
    path: '/account/reset',
    name: 'reset',
    component: AuthRecoverPassword
  },
  {
    path: '/account/reset/:customerId/:resetToken',
    name: 'reset',
    component: AuthResetPassword
  },
  /**
   * Account route(s)
   */
  {
    path: '/account',
    name: 'account',
    component: Account
  },
  {
    path: '/account/addresses',
    name: 'account-addresses',
    component: AccountAddresses
  },
  {
    path: '/account/addresses/new',
    name: 'account-addresses-new',
    component: AccountAddressNew
  },
  {
    path: '/account/addresses/:id',
    name: 'account-addresses-id',
    component: AccountAddress
  },
  {
    path: '/account/orders',
    name: 'orders',
    component: AccountOrders
  },
  {
    path: '/account/orders/:id',
    name: 'orders-id',
    component: AccountOrder
  },
  {
    path: '/account/password',
    name: 'account-password',
    component: AccountPassword
  },
  {
    path: '/account/personalData',
    name: 'personalData',
    component: AccountPersonalData
  },
  /**
   * Product route(s)
   */
  {
    path: '/products/:id',
    name: 'product',
    component: Product
  },
  // {
  //   path: '/products',
  //   name: 'products',
  //   component: Products
  // },
  /**
   * Collection route(s)
   */
  {
    path: '/collections/:id',
    name: 'collection',
    component: Collection
  },
  {
    path: '/collections/:collectionId/products/:productId',
    name: 'product',
    component: Product
  },
  // {
  //   path: '/collections',
  //   name: 'collections',
  //   component: Collections
  // },
  /**
   * Cart route(s)
   */
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  // {
  //   path: '/menu',
  //   name: 'menu',
  //   component: Menu
  // },
  /**
   * Search route(s)
   */
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  // {
  //   path: '/faq',
  //   name: 'faq',
  //   component: Faq
  // },
  // {
  //   path: '/share/:referralCode',
  //   name: 'referralShare',
  //   component: ReferralShare
  // }
  {
    path: '*',
    name: 'error404',
    component: Error404
  }
]
