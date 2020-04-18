import axios from 'axios'
import { storefront } from '~/utils/shopify-storefront'
import {
  customerOrders,
  customerAddresses
} from '~/graphql/queries/customer'
import { order } from '~/graphql/queries/order'
import { mailingAddress } from '~/graphql/queries/mailing-address'


export default {
  async fetchOrder ({ commit, rootState }, orderId) {
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

  async fetchAddress ({ commit, rootState }, addressId) {
    const { data, status } = await storefront({
      data: mailingAddress({ addressId })
    })
    console.log('fetchOrder: ', data)
    const { node } = data.data
    commit('SET_ACTIVE_ADDRESS', { address: node })
  },

  async fetchAddresses ({ commit, rootState }) {
    const { accessToken } = rootState.auth.customer
    const { data, status } = await storefront({
      data: customerAddresses({ accessToken })
    })
    const { addresses, defaultAddress } = data.data.customer
    commit('SET_ADDRESSES', { addresses })
    commit('SET_DEFAULT_ADDRESS', { defaultAddress })
  },
}
