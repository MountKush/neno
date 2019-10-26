<template lang='pug'>
div(class='container')

</template>


<script>
export default {
  beforeRouteEnter (to, from, next) {
    const { referralCode } = to.params
    referralCode ? localStorage.setItem('referralCode', referralCode) : null
    next({ name: 'index' })
  }
}
</script>


<style lang='sass' scoped>

</style>
