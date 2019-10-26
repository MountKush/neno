import ShopifyBuy from 'shopify-buy'
import 'isomorphic-fetch'

// documentation = https://shopify.github.io/js-buy-sdk
const config = {
  domain: process.env.SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
}

const shopifyClient = ShopifyBuy.buildClient(config)

export { shopifyClient }
