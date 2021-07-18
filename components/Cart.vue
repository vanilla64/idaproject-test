<template>
  <section
    class="cart"
    v-bind:class="{ 'cart_active': isCartVisible }"
  >
    <div
      class="cart__overlay"
      v-on:click="setCartVisible"
      v-bind:class="{ 'cart__overlay_active': isCartVisible }"
    />
    <div
      class="cart__container"
      v-bind:class="{ 'cart__container_active': isCartVisible }"
    >
      <div
        class="cart__close-btn"
        v-on:click="setCartVisible"
      />
      <h3 class="cart__title">Корзина</h3>
      <EmptyCart v-if="!isSuccessOrder && productsInCart.length === 0" />
      <ProductsInCart v-if="productsInCart.length > 0" />
      <SuccessOrder v-if="isSuccessOrder && productsInCart.length === 0" />
    </div>
  </section>
</template>

<script>
  export default {
    computed: {
      isCartVisible() {
        return this.$store.state.isCartVisible
      },
      productsInCart() {
        return this.$store.state.productsInCart
      },
      isSuccessOrder() {
        return this.$store.state.isSuccessOrder
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
  .cart
    position: fixed
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    visibility: hidden
    transition: $transitionTimeHover
    &_active
      visibility: visible

    &__overlay
      width: 100%
      height: 100%
      opacity: 0
      background: $white
      transition: .5s
      &_active
        opacity: .8

    &__container
      position: absolute
      top: 0
      right: -100%
      box-sizing: border-box
      padding: 52px 48px 0
      width: 460px
      height: 100%
      background: $white
      box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05)
      border-radius: 8px 0px 0px 8px
      transition: .3s ease-in-out
      transition-delay: .2s
      overflow: scroll
      &_active
        right: 0

    &__close-btn
      position: absolute
      top: 65px
      right: 53px
      width: 14px
      height: 14px
      background-image: url('/images/close-icon.svg')
      background-size: contain
      transition: $transitionTimeHover
      &:hover
        transform: scale(1.15)

    &__title
      margin: 0 0 24px
      font-weight: bold
      font-size: 32px
      line-height: 41px
      color: $black

</style>
