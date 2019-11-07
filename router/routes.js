import Index from '../pages/index.vue'
// const Auth = () => import('~/views/Auth.vue')
// const Account = () => import('~/views/Account.vue')
import Product from '~/pages/Product.vue'
// const Products = () => import('~/views/Products.vue')
import Collection from '~/pages/Collection.vue'
// const Collections = () => import('~/views/Collections.vue')
import Cart from '~/pages/Cart.vue'
// const Menu = () => import('~/views/Menu.vue')
// const Search = () => import('~/views/Search.vue')
// const Faq = () => import('~/views/Faq.vue')
// const ReferralShare = () => import('~/views/ReferralShare.vue')


export const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  // {
  //   path: '/auth',
  //   name: 'auth',
  //   component: Auth
  // },
  // {
  //   path: '/account',
  //   name: 'account',
  //   component: Account
  // },
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
  // {
  //   path: '/search',
  //   name: 'search',
  //   component: Search
  // },
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
