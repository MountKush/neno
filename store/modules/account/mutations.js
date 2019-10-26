export default {
  SET_CUSTOMER (state, { customer }) {
    state.customer = customer
    console.log('SET_CUSTOMER_DETAILS: ', customer)
  },


  DELETE_CUSTOMER (state) {
    state.customer = {}
    console.log('DELETE_CUSTOMER_DETAILS: ')
  }
}
