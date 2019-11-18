import Index from '../pages/index.vue'
import Auth from '~/pages/Auth.vue'
import Account from '~/pages/Account.vue'
import CustomerRegister from '~/pages/account/Register.vue'
import Product from '~/pages/Product.vue'
// const Products = () => import('~/views/Products.vue')
import Collection from '~/pages/Collection.vue'
// const Collection = () => import('~/pages/Collection.vue')
import Cart from '~/pages/Cart.vue'
// const Menu = () => import('~/views/Menu.vue')
// const Search = () => import('~/views/Search.vue')
import Search from '~/pages/Search.vue'
// const Faq = () => import('~/views/Faq.vue')
// const ReferralShare = () => import('~/views/ReferralShare.vue')


export const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  // {
  //   path: '/account/login',
  //   name: 'auth',
  //   component: Auth
  // },
  {
    path: '/account',
    name: 'account',
    component: Account,
    children: [
      {
        path: 'login',
        name: 'auth',
        component: Auth
      },
      {
        path: 'register',
        name: 'register',
        component: CustomerRegister
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
]
