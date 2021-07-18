<template>
  <div class="rating">
    <Star />
    <div class="rating__digit">{{ rating }}</div>
  </div>
</template>

<script>
  export default {
    props: ['rating']
  }
</script>

<style lang="sass" scoped>
  .rating
    position: absolute
    display: flex
    align-items: center
    &_type_cart
      bottom: 0
      left: 0
    &__digit
      margin: 0 0 0 4px
      font-weight: bold
      font-size: 10px
      line-height: 13px
      color: $yellow
</style>
