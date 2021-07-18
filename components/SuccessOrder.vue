<template>
  <div class="success-order">
    <div class="success-order__img" />
    <h3 class="success-order__title">Заявка успешно отправлена</h3>
    <p class="success-order__text">Вскоре наш менеджер свяжется с Вами</p>
  </div>
</template>

<style lang="sass" scoped>
  .success-order
    width: 100%
    height: 100%
    display: flex
    flex-direction: column
    justify-content: center
    //margin: 366px 0 0
    align-items: center
    &__img
      width: 80px
      height: 80px
      background-image: url('/images/ok-emoji.png')
    &__title
      font-weight: bold
      font-size: 24px
      line-height: 31px
      margin: 24px 0 2px
    &__text
      margin: 0
      font-weight: normal
      font-size: 16px
      line-height: 21px
      color: $grey
</style>
