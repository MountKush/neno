import ShopifyBuy from 'shopify-buy'


// documentation = https://shopify.github.io/js-buy-sdk

const config = {
  domain: process.env.SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN
}

export const shopifyClient = ShopifyBuy.buildClient(config)
