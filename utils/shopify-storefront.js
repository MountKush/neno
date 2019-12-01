import axios from 'axios'


const storefront = async ({ data }) => {
  const storefrontAccessToken = window.app.settings.storefront_access_token
  const config = {
    url: '/api/2019-10/graphql',
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


export { storefront }
