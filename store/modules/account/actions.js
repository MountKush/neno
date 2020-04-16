import axios from 'axios'
import { storefront } from '~/utils/shopify-storefront'
import { customerOrders } from '~/graphql/queries/customer'
import { order } from '~/graphql/queries/order'


export default {
  async fetchOrder ({ commit, rootState }, orderId) {
    const { accessToken } = rootState.auth.customer
    const { data, status } = await storefront({
      data: order({ orderId })
    })
    console.log('fetchOrder: ', data)
    const { node } = data.data
    commit('SET_ACTIVE_ORDER', { order: node })
  },

  async fetchOrders ({ commit, rootState }) {
    const { accessToken } = rootState.auth.customer
    const { data, status } = await storefront({
      data: customerOrders({ accessToken })
    })
    const { orders } = data.data.customer
    commit('SET_ORDERS', { orders })
  },
}
