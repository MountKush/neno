import axios from 'axios'
import { storefront } from '~/utils/shopify-storefront'
import {
  customerAccessTokenCreate,
  customerActivate,
  customerCreate,
  customerRecover,
  customerReset,
  customerResetByUrl
} from '~/graphql/mutations/customer'
import { encodeCustomerId } from '~/utils/encode-customer-id'


export default {
  initCustomerState ({ commit }) {
    const customer = JSON.parse(
      localStorage.getItem('customer')
    )
    if (!customer) return
    const date = Date.now()
    if (customer && Date.now() <= Date.parse(customer.expiresAt)) {
      const { accessToken, expiresAt } = customer
      commit('SET_CUSTOMER', { accessToken, expiresAt })
    }
  },


  async signIn ({ commit }, { email, password }) {
    console.log('email: ', email)
    console.log('password: ', password)
    const { data, status } = await storefront({
      data: customerAccessTokenCreate({ email, password })
    })
    console.log('data: ', data)
    const { accessToken, expiresAt } = data.data.customerAccessTokenCreate.customerAccessToken
    commit('SET_CUSTOMER', { accessToken, expiresAt })
    localStorage.setItem('customer', JSON.stringify({ accessToken, expiresAt }))
  },


  async signOut ({ commit }) {
    commit('DELETE_CUSTOMER')
    localStorage.removeItem('customer')
  },


  async createCustomer ({ commit }, { email, password }) {
    const { data, status } = await storefront({
      data: customerCreate({ email, password })
    })
    console.log('data: ', data)
  },


  async customerRecover ({ commit }, { email }) {
    const { data, status } = await storefront({
      data: customerRecover({ email })
    })
    console.log('data: ', data)
  },


  async customerReset ({ commit }, { id, resetToken, password }) {
    const { data, status } = await storefront({
      data: customerReset({
        id: encodeCustomerId(id),
        resetToken,
        password
      })
    })
    console.log('data: ', data)
    const { accessToken, expiresAt } = data.data.customerReset.customerAccessToken
    commit('SET_CUSTOMER', { accessToken, expiresAt })
  },


  async customerResetByUrl ({ commit }, { resetUrl, password }) {
    const { data, status } = await storefront({
      data: customerResetByUrl({ resetUrl, password })
    })
    console.log('data: ', data)
    const { accessToken, expiresAt } = data.data.customerResetByUrl.customerAccessToken
    commit('SET_CUSTOMER', { accessToken, expiresAt })
  },


  async customerActivate ({ commit }, { id, activationToken, password }) {
    const { data, status } = await storefront({
      data: customerActivate({
        id: encodeCustomerId(id),
        activationToken,
        password
      })
    })
    console.log('data: ', data)
    const { accessToken, expiresAt } = data.data.customerActivate.customerAccessToken
    commit('SET_CUSTOMER', { accessToken, expiresAt })
  },
}
