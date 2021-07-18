<template>
  <button v-on:click="onClick">{{ text }}</button>
</template>

<script>
  export default {
    props: ['text', 'onClick']
  }
</script>

<style lang="sass" scoped>
  button
    padding: 14px 0 15px
    font-weight: normal
    font-size: 16px
    line-height: 21px
    color: $white
    background: $black
    width: 100%
    border-radius: 8px
    outline: none
    border: none
    cursor: pointer
    transition: $transitionTimeHover
    &:hover
      background: $grey
</style>
