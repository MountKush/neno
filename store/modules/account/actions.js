import axios from 'axios'
import { isEmpty } from 'lodash'
import { storefront } from '~/utils/shopify-storefront'
import { encodeCustomerId } from '~/utils/encode-customer-id'
/** Storefront queries */
import {
  customerAddresses,
  customerDefaultAddress,
  customerOrders
} from '~/graphql/queries/customer'
import { order } from '~/graphql/queries/order'
import { mailingAddress } from '~/graphql/queries/mailing-address'
/** Storefront mutations */
import {
  customerAddressCreate,
  customerAddressDelete,
  customerAddressUpdate,
  customerDefaultAddressUpdate
} from '~/graphql/mutations/customer'


export default {
  async fetchOrder ({ commit, rootState }, orderId) {
    const { data, status } = await storefront({
      data: order({ orderId })
    })
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

  async fetchDefaultAddress ({ commit, rootState }) {
    const { accessToken } = rootState.auth.customer
    const { data, status } = await storefront({
      data: customerDefaultAddress({ accessToken })
    })
    const { defaultAddress } = data.data.customer
    commit('SET_DEFAULT_ADDRESS', { defaultAddress })
  },

  async createAddress ({ commit, dispatch, rootState }, address) {
    const { accessToken } = rootState.auth.customer
    const { data, status } = await storefront({
      data: customerAddressCreate({ accessToken, address })
    })
    const { customerAddress, customerUserErrors } = data.data.customerAddressCreate
    if (!isEmpty(customerUserErrors)) throw customerUserErrors[0]
    if (address.isDefault) await dispatch('updateDefaultAddress', customerAddress.id)
  },

  async deleteAddress ({ commit, dispatch, rootState }, id) {
    const { accessToken } = rootState.auth.customer
    const { data, status } = await storefront({
      data: customerAddressDelete({ accessToken, id })
    })
    const { customerUserErrors } = data.data.customerAddressDelete
    if (!isEmpty(customerUserErrors)) throw customerUserErrors[0]
  },

  async updateAddress ({ commit, dispatch, rootState }, { address, id }) {
    const { accessToken } = rootState.auth.customer
    const { data, status } = await storefront({
      data: customerAddressUpdate({ accessToken, address, id })
    })
    const { customerUserErrors } = data.data.customerAddressUpdate
    if (!isEmpty(customerUserErrors)) throw customerUserErrors[0]
    if (address.isDefault) await dispatch('updateDefaultAddress', id)
  },

  async updateDefaultAddress ({ commit, rootState }, addressId) {
    const { accessToken } = rootState.auth.customer
    const { data, status } = await storefront({
      data: customerDefaultAddressUpdate({ accessToken, addressId })
    })
    const { customerUserErrors } = data.data.customerDefaultAddressUpdate
    if (!isEmpty(customerUserErrors)) throw customerUserErrors[0]
    commit('SET_DEFAULT_ADDRESS', { defaultAddress: { id: addressId }})
  },
}
