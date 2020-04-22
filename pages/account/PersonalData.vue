<template lang='pug'>
div(class='personal-data')
  ValidationObserver(v-slot='{ pristine, invalid, handleSubmit }')
    form(
      @submit.prevent='handleSubmit(onSubmit)'
      class='personal-data__form'
    )
      BaseInput(
        v-model='form.firstName'
        rules='required|isAlpha'
        label='First Name'
        placeholder='First Name'
        class='personal-data__input'
      )
      BaseInput(
        v-model='form.lastName'
        rules='required|isAlpha'
        label='Last Name'
        placeholder='Last Name'
        class='personal-data__input'
      )
      BaseInput(
        v-model='form.email'
        rules='required|isEmail'
        label='Email'
        placeholder='Email'
        class='personal-data__input'
      )
      BaseInput(
        v-model='form.phone'
        rules='isMobilePhone'
        label='Phone Number'
        placeholder='Phone Number'
        class='personal-data__input'
      )
      BaseCheckbox(
        v-model='form.acceptsMarketing'
        :checked='form.acceptsMarketing'
        rules='isBoolean'
        text='Consent to be sent marketing material via email'
        class='personal-data__input'
      )
      BaseButton(
        :disabled='invalid || pristine'
        text='Save'
        class='personal-data__button'
      )
</template>

<script>
import { mapState, mapActions } from 'vuex'

const formData = {
  acceptsMarketing: false,
  email: '',
  firstName: '',
  lastName: '',
  phone: ''
}

export default {
  components: {},
  props: {},
  data () {
    return {
      form: { ...formData }
    }
  },
  computed: {
    ...mapState({
      personalData: (state) => state.account.personalData
    })
  },
  watch: {
    personalData(personalData) {
      if (personalData) {
        Object.keys(this.form).forEach(
          (key) => this.form[key] = personalData[key]
        )
      }
    }
  },
  created() {
    this.fetchPersonalData()
  },
  methods: {
    async onSubmit() {
      await this.updatePersonalData(this.form)
    },

    ...mapActions({
      fetchPersonalData: 'account/fetchPersonalData',
      updatePersonalData: 'account/updatePersonalData'
    })
  }
}
</script>

<style lang='sass' scoped>
.personal-data
  margin: 0 auto
  max-width: 600px

  &__form
    display: grid
    grid-gap: $unit*2
    grid-template-columns: 1fr
    padding: $unit*2
    +mq-m
      grid-template-columns: repeat(2, 1fr)

  &__input

    &:nth-child(n+3):nth-child(-n+6)
      grid-column: 1 / -1
</style>
