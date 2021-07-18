<template>
  <header class="header">
    <div class="header__container">
      <h1 class="header__title">TestList</h1>
      <div v-on:click="setCartVisible" class="header__cart-btn">
        <div v-if="cartLength > 0" class="header__badge"><span>{{ cartLength }}</span></div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    computed: {
      isCartVisible() {
        return this.$store.state.isCartVisible
      },
      cartLength() {
        return this.$store.state.productsInCart.length
      }
    },
    methods: {
      setCartVisible() {
        this.$store.commit('setCartVisible')
      },
    }
  }
</script>

<style lang="sass" scoped>
  .header
    width: 100%
    padding: 18px 0 20px
    background-color: $white
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05)
    border-radius: 0px 0px 8px 8px

    &__container
      max-width: $maxWrapperWidth
      margin: 0 auto
      display: flex
      justify-content: space-between
      align-items: center

    &__title
      margin: 0
      font-style: normal
      font-weight: bold
      font-size: 22px
      color: $grey

    &__cart-btn
      position: relative
      width: 24px
      height: 26px
      color: $black
      cursor: pointer
      background-color: transparent
      background-image: url('/images/cart-icon.svg')
      background-size: contain
      background-repeat: no-repeat
      transition: $transitionTimeHover
      &:hover
        opacity: .5

    &__badge
      position: absolute
      top: -3px
      right: -3px
      width: 12px
      height: 12px
      font-weight: bold
      font-size: 8px
      line-height: 10px
      background: $greyLight
      border-radius: 50%
      display: flex
      justify-content: center
      align-items: center
      text-align: center
      color: $white
      span
        transform: translateY(1px)
</style>
