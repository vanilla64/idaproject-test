<template>
<p>{{ text }}</p>
</template>

<script>
  export default {
    props: ['text']
  }
</script>

<style lang="sass" scoped>
  p
    margin: 0 0 16px
    font-weight: normal
    font-size: 18px
    line-height: 23px
    color: $grey
</style>
