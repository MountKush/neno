import axios from 'axios'
import { storefrontAccessToken } from '~/utils/constants'

export const storefront = async ({ data }) => {
  const config = {
    url: '/api/2020-07/graphql',
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/graphql',
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken
    },
    data
  }
  const res = await axios(config)
  return res
}
