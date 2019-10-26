<template lang='pug'>
div(class='container-form-name')

  form(
    @submit.prevent='validateForm'
    class='form-name'
  )
    label(class='label') First Name
    input(
      v-model='firstName'
      v-validate='"required|alpha_spaces"'
      name='firstName'
      class='input'
    )
    label(class='label') Last Name
    input(
      v-model='lastName'
      v-validate='"required|alpha_spaces"'
      name='lastName'
      class='input'
    )
    div(class='buttons')
      a(
        @click='cancel'
        class='cancel'
      ) Cancel
      input(
        value='Save'
        type='submit'
        class='submit'
      )

</template>


<script>
import { mapActions } from 'vuex'


export default {
  components: {},
  props: {
    name: {
      type: Object
    }
  },
  data () {
    return {
      firstName: '',
      lastName: ''
    }
  },
  computed: {},
  watch: {
    name () {
      console.log('name: ', this.name)
      this.setName()
    }
  },
  methods: {
    setName () {
      const { firstName, lastName } = this.name
      this.firstName = firstName
      this.lastName = lastName
    },


    async validateForm () {
      try {
        const firstName = this.firstName
        const lastName = this.lastName

        const isValid = await this.$validator.validateAll()
        console.log('isValid: ', isValid)
        if (!isValid) return
        await this.writeName({ firstName, lastName })
        this.$emit('handleClose')
      }
      catch (e) {
        console.error(e)
      }
    },


    cancel () {
      this.setName()
      this.$emit('handleClose')
    },


    ...mapActions({
      writeName: 'account/writeName'
    })
  }
}
</script>


<style lang='sass' scoped>
.container-form-name

.form-name
  @extend %account-form


</style>
