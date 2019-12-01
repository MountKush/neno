export default {
  isAuthUser (state) {
    return state.customer !== null
  },


  getAuthUser ({ authUser }) {
    return {
      uid: `${ authUser.uid || '' }`,
      displayName: `${ authUser.displayName || '' }`,
      profilePicture: `${ authUser.photoURL || '' }`
    }
  }
}
