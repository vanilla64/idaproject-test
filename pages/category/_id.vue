<template>

</template>

<script>
  export default {
    data: () => ({
      cards: []
    }),
    methods: {
      setCards() {
        this.$store.commit('setCards', this.cards)
      },
    },
    async asyncData({ params, $axios }) {
      const arr = await $axios.$get(`https://frontend-test.idaproject.com/api/product?category=${params.id}`)
      const cards = await arr.map(c => {
        c.isOrdered = false
        return c
      })
      return { cards }
    },
    mounted() {
      this.setCards()
      console.log(this.cards)
    }
  }
</script>
