<template>
  <div class="products-in-cart">
    <CartSubtitle v-bind:text="'Товары в корзине'" />
    <ul class="products-in-cart__list">
      <OrderedProduct
        v-for="product in orderedProducts" :key="product.id"
        v-bind:product="product"
      />
    </ul>
    <OrderForm />
  </div>
</template>

<script>
export default {
  computed: {
    orderedProducts() {
      return this.$store.state.productsInCart
    }
  }
}
</script>

<style lang="sass" scoped>
  .products-in-cart
    width: 100%
    display: flex
    flex-direction: column
    &__list
      display: grid
      grid-gap: 12px
      grid-template-columns: repeat(1, 1fr)
      grid-template-rows: repeat(1, 1fr)
      list-style-type: none
      padding: 0
      margin: 0
      max-height: 384px
      overflow: scroll
</style>

