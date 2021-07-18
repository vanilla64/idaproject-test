<template>
  <li class="card">
    <img
      class="card__img"
      :src="'https://frontend-test.idaproject.com' + card.photo"
      :alt="card.name"
    >
    <div class="card__heading">
      <h3 class="card__title">{{ card.name }}</h3>
      <span class="card__price">{{ card.price }} ₽</span>
    </div>
    <div class="card__rating">
      <Star />
      <div class="card__digit">{{ card.rating }}</div>
    </div>
    <div
      v-on:click="handleCartClick"
      class="card__cart-btn"
      v-bind:class="{ 'card__cart-btn_active': this.card.isOrdered }"
    />
  </li>
</template>

<script>
  export default {
    props: {
      card: {
        type: Object
      },
    },
    computed: {
      isOrdered() {
        return this.card.isOrdered
      }
    },
    methods: {
      addToCart() {
        this.$store.commit('addProductInCart', this.card)
      },
      removeFromCart() {
        this.$store.commit('deleteProductFromCart', this.card)
      },
      isOrderedToggle() {
        // this.card.isOrdered = !this.card.isOrdered
        this.$store.commit('isOrderedToggle', this.card)
      },
      handleCartClick() {
        if (!this.card.isOrdered) {
          this.isOrderedToggle()
          this.addToCart()
        } else {
          this.removeFromCart()
          this.isOrderedToggle()
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
  .card
    position: relative
    display: flex
    flex-direction: column
    padding: 18px 16px 16px
    width: 264px
    height: 272px
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05)
    border-radius: 8px
    box-sizing: border-box

    &__img
      margin: 0 auto
      width: 143px
      height: 180px

    &__heading
      width: 100%

    &__title
      margin: 16px 0 6px
      font-weight: normal
      font-size: 14px
      line-height: 18px
      color: $grey

    &__price
      font-weight: bold
      font-size: 14px
      line-height: 18px
      color: $black

    &__cart-btn
      position: absolute
      top: 18px
      right: 18px
      width: 12px
      height: 13px
      background-image: url('/images/cart-icon.svg')
      background-repeat: no-repeat
      background-size: contain
      opacity: .5
      cursor: pointer
      transition: $transitionTimeHover
      &_active
        opacity: 1
      &:hover
        opacity: 1

    &__rating
      position: absolute
      display: flex
      align-items: center

    &__digit
      margin: 0 0 0 4px
      font-weight: bold
      font-size: 10px
      line-height: 13px
      color: $yellow


</style>
