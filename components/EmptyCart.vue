<template>
  <div class="empty-cart">
    <p class="empty-cart__text">Пока что вы ничего не добавили в корзину.</p>
    <CartButton
      v-bind:onClick="setCartVisible"
      v-bind:text="'Перейти к выбору'"
    />
  </div>
</template>

<script>
  export default {
    methods: {
      setCartVisible() {
        this.$store.commit('setCartVisible')
      },
    }
  }
</script>

<style lang="sass" scoped>
.empty-cart
  width: 100%
  &__text
    margin: 0 0 24px
    font-weight: normal
    font-size: 22px
    line-height: 28px
</style>
