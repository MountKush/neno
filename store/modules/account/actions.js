import axios from 'axios'
import { isEmpty } from 'lodash'
import phone from 'phone'
import { storefront } from '~/utils/shopify-storefront'
import { encodeCustomerId } from '~/utils/encode-customer-id'
/** Storefront queries */
import {
  customerAddresses,
  customerDefaultAddress,
  customerOrders,
  customerPersonalData
} from '~/graphql/queries/customer'
import { order } from '~/graphql/queries/order'
import { mailingAddress } from '~/graphql/queries/mailing-address'
/** Storefront mutations */
import {
  customerAddressCreate,
  customerAddressDelete,
  customerAddressUpdate,
  customerDefaultAddressUpdate,
  customerPersonalDataUpdate,
  customerPasswordUpdate
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

  async fetchPersonalData ({ commit, rootState }) {
    const { accessToken } = rootState.auth.customer
    const { data, status } = await storefront({
      data: customerPersonalData({ accessToken })
    })
    const { customer } = data.data
    console.log('customer: ', customer)
    commit('SET_PERSONAL_DATA', { customer })
  },

  async updatePersonalData ({ commit, rootState }, customer) {
    const { data, status } = await storefront({
      data: customerPersonalDataUpdate({
        accessToken: rootState.auth.customer.accessToken,
        customer: { ...customer, phone: phone(customer.phone)[0] }
      })
    })
    const { customerUpdate } = data.data
    // const { accessToken, expiresAt } = customerUpdate.customerAccessToken
    // commit('auth/SET_CUSTOMER', { accessToken, expiresAt }, { root: true })
  },

  async updatePassword ({ commit, rootState }, password) {
    const { data, status } = await storefront({
      data: customerPasswordUpdate({
        accessToken: rootState.auth.customer.accessToken,
        customer: { password }
      })
    })
    const { customerUpdate } = data.data
    console.log('customerUpdate: ', customerUpdate)
    const { accessToken, expiresAt } = customerUpdate.customerAccessToken
    commit('auth/SET_CUSTOMER', { accessToken, expiresAt }, { root: true })
  }
}
