import Index from '../pages/index.vue'
import Account from '~/pages/account/Index.vue'
import AccountOrders from '~/pages/account/Orders.vue'
import AccountPersonalData from '~/pages/account/PersonalData.vue'
import Auth from '~/pages/auth/Index.vue'
import AuthActivateAccount from '~/pages/auth/ActivateAccount.vue'
import AuthLogin from '~/pages/auth/Login.vue'
import AuthRegister from '~/pages/auth/Register.vue'
import AuthRecoverPassword from '~/pages/auth/RecoverPassword.vue'
import AuthResetPassword from '~/pages/auth/ResetPassword.vue'
import Product from '~/pages/Product.vue'
// const Products = () => import('~/views/Products.vue')
import Collection from '~/pages/Collection.vue'
// const Collection = () => import('~/pages/Collection.vue')
import Cart from '~/pages/Cart.vue'
// const Menu = () => import('~/views/Menu.vue')
// const Search = () => import('~/views/Search.vue')
import Search from '~/pages/Search.vue'
import Error404 from '~/pages/Error404.vue'
// const Faq = () => import('~/views/Faq.vue')
// const ReferralShare = () => import('~/views/ReferralShare.vue')


export const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/account/',
    name: 'auth',
    component: Auth,
    children: [
      {
        path: 'activate/:customerId/:activationToken',
        name: 'activate',
        component: AuthActivateAccount
      },
      {
        path: 'login',
        name: 'auth',
        component: AuthLogin
      },
      {
        path: 'register',
        name: 'register',
        component: AuthRegister
      },
      {
        path: 'reset',
        name: 'reset',
        component: AuthRecoverPassword
      },
      {
        path: 'reset/:customerId/:resetToken',
        name: 'reset',
        component: AuthResetPassword
      }
    ]
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
    children: [
      {
        path: 'order',
        name: 'order',
        component: AccountOrders
      },
      {
        path: 'personalData',
        name: 'personalData',
        component: AccountPersonalData
      }
    ]
  },
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
