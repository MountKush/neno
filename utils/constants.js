/**
 * The Shopify Storefront API token
 * @see https://shopify.dev/docs/storefront-api/getting-started
 */
export const storefrontAccessToken = window.app.settings.storefront_access_token

/**
 * The active client's locale (e.g. 'en', 'es', etc)
 */
export const locale = window.Shopify.locale


/**
 * Order fulfillment status UI friendly equivalent values
 * @see https://shopify.dev/docs/storefront-api/reference/object/order/orderfulfillmentstatus?api[version]=2020-07
 */
export const orderFulfillmentStatusMap = {
  FULFILLED: 'Fulfilled',
  IN_PROGRESS: 'In progress',
  OPEN: 'Open',
  PARTIALLY_FULFILLED: 'Partially fulfilled',
  PENDING_FULFILLMENT: 'Pending fulfillment',
  RESTOCKED: 'Restocked',
  UNFULFILLED: 'Unfulfilled'
}

/**
 * Order financial status UI friendly equivalent values
 * @see https://shopify.dev/docs/storefront-api/reference/object/order/orderfinancialstatus?api[version]=2020-07
 */
export const orderFinancialStatusMap = {
  AUTHORIZED: 'Authorized',
  PAID: 'Paid',
  PARTIALLY_PAID: 'Partially paid',
  PARTIALLY_REFUNDED: 'Partially refunded',
  PENDING: 'Pending',
  REFUNDED: 'Refunded',
  VOIDED: 'Voided'
}
