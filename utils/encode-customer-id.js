const base64 = 'gid://shopify/Customer/'
export const encodeCustomerId = id => window.btoa(base64 + id)
