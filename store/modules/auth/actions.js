import axios from 'axios'
import { storefront } from '~/utils/shopify-storefront'


export default {
  async signIn ({ commit }) {
    // const data = `
    //   {
    //     shop {
    //       name
    //       primaryDomain {
    //         url
    //         host
    //       }
    //     }
    //   }
    // `
    const data = `
      mutation {
        customerAccessTokenCreate(input: {
          email: "test11@gmail.com",
          password: "192837465"
        }) {
          userErrors {
            field
            message
          }
          customerAccessToken {
            accessToken
            expiresAt
          }
        }
      }
    `
    

    const res = await storefront({ data })
    console.log('res: ', res)
  },


  async signOut ({ commit }) {
    commit('DELETE_CUSTOMER')
  },


  async createCustomer ({ commit }, { email, password }) {
    // const data = `
    //   {
    //     shop {
    //       name
    //       primaryDomain {
    //         url
    //         host
    //       }
    //     }
    //   }
    // `
    const data = `
      mutation {
        customerCreate(input: {
          email: "${email}",
          password: "${password}"
        }) {
          customerUserErrors {
            field
            message
          }
          customer {
            id
          }
        }
      }
    `

    const res = await storefront({ data })
    console.log('res: ', res)
  },
}
