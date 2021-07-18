<template>
  <li class="ordered-product">
    <img
      class="ordered-product__img"
      :src="'https://frontend-test.idaproject.com' + product.photo"
      :alt="product.name"
    >
    <div class="ordered-product__content">
      <h3 class="ordered-product__title">{{ product.name }}</h3>
      <span class="ordered-product__price">{{ product.price }}</span>
      <CardRating v-bind:rating="product.rating" v-bind:class="{ 'rating_type_cart': true }" />
    </div>
    <button v-on:click="removeFromCart" class="ordered-product__delete-btn" />
  </li>
</template>

<script>
  export default {
    props: ['product'],
    methods: {
      isOrderedToggle() {
        this.$store.commit('isOrderedToggle', this.product)
      },
      removeFromCart() {
        this.$store.commit('deleteProductFromCart', this.product)
        this.isOrderedToggle()
      },
    }
  }
</script>

<style lang="sass" scoped>
  .ordered-product
    position: relative
    display: flex
    padding: 15px 25px
    box-sizing: border-box
    width: 100%
    height: 120px
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05)
    border-radius: 8px
    &__img
      margin: 0 34px 0 0
      width: 70px
      height: 90px
    &__content
      position: relative
      width: 170px
    &__title
      margin: 0 0 6px
      font-weight: normal
      font-size: 14px
      line-height: 18px
      color: $grey
    &__price
      font-weight: bold
      font-size: 14px
      line-height: 18px
      color: $black
    &__delete-btn
      position: absolute
      right: 22px
      top: calc(50% - 11px)
      width: 20px
      height: 22px
      outline: none
      border: none
      background-image: url('/images/delete-btn.svg')
      background-color: transparent
      transition: $transitionTimeHover
      opacity: .5
      cursor: pointer
      &:hover
        opacity: 1

</style>
