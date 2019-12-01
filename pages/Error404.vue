<template lang='pug'>
main(class='container-error')
  div(class='error')
    header
      h1(class='error__title') Error 404
      p Page cannot be found...
</template>


<style lang='sass' scoped>
.container-error
  @extend %flex--column-center

.error

  &__title
    font-size: $fs3
    font-weight: $fw-bold

</style>
