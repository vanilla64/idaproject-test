<template>
  <section class="products">
    <ul class="products__list">
      <Card
        v-for="card in cards" :key="card.id"
        v-bind:card="card"
      />
    </ul>
  </section>
</template>

<script>
  export default {
    computed: {
      cards() {
        return this.$store.state.cards
      }
    },
    // methods: {
    //   saveCardsInLS() {
    //     this.$store.commit('saveCardsInLS', this.cards)
    //   },
    //   getCards() {
    //     this.$store.commit('getCardsFromLS')
    //   },
    //   setCards() {
    //     this.$store.commit('setCards')
    //   },
    //   removeCards() {
    //     this.$store.commit('removeCardsFromLS')
    //   }
    // },
  }
</script>

<style lang="sass" scoped>
  .products
    width: calc(100% - 160px)
    &__list
      display: grid
      grid-gap: 16px
      grid-template-columns: repeat(4, 1fr)
      grid-template-rows: repeat(1, 1fr)
      width: 100%
      list-style-type: none
      padding: 0
      margin: 0
      @media screen and (max-width: 1435px)
        grid-template-columns: repeat(3, 1fr)
      @media screen and (max-width: 1135px)
        grid-template-columns: repeat(2, 1fr)
      @media screen and (max-width: 805px)
        grid-template-columns: repeat(1, 1fr)
</style>
