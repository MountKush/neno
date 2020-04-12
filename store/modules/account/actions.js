import axios from 'axios'
import { storefront } from '~/utils/shopify-storefront'
import {
  customerOrders
} from '~/graphql/queries/customer'


export default {
  async fetchOrders ({ commit, rootState }) {
    const { accessToken } = rootState.auth.customer
    const { data, status } = await storefront({
      data: customerOrders({ accessToken })
    })
    console.log('data: ', data)
    const { orders } = data.data.customer
    commit('SET_ORDERS', { orders })
  },
}
