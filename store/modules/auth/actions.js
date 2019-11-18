import axios from 'axios'

export default {
  async signIn ({ commit }) {

    const config = {
      method: 'post',
      url: '/account/login',
      data: {
        'customer[email]': 'tes2@gmail.com',
        'customer[password]': '192837465',
        form_type: 'customer_login',
        utf8: '✓'
      },
      params: {
        view: 'endpoint'
      },
      responseType: 'document'
    }

    // const config = {
    //   method: 'post',
    //   url: '/account',
    //   data: {
    //     'customer[email]': 'jumastevens@gmail.com',
    //     'customer[password]': '192837465',
    //     'customer[first_name]': 'juma test',
    //     'customer[last_name]': 'test lastname',
    //     form_type: 'create_customer',
    //     utf8: '✓'
    //   },
    //   params: {
    //     view: 'endpoint'
    //   },
    //   responseType: 'document'
    // }

    const res = await axios(config)
    console.log('res: ', res)

    const customer = {
      name: 'test'
    }
    commit('SET_CUSTOMER', { customer })
    return res.data.body.innerHTML
  },


  async signOut ({ commit }) {
    commit('DELETE_CUSTOMER')
  },
}
