<template>
  <input
    :id="info.id"
    :name="info.name"
    :type="info.type"
    :placeholder="info.placeholder"
    :required="info.required"
  >
</template>

<script>
  export default {
    props: ['info'],
  }
</script>

<style lang="sass" scoped>
  input
    box-sizing: border-box
    margin: 0 0 16px
    padding: 14px
    height: 50px
    font-weight: normal
    font-size: 16px
    line-height: 21px
    color: $black
    background: $greyExtraLight
    border: none
    border-radius: 8px
    outline: none
    transition: .3s
    &::placeholder
      color: $greyLight
    &:focus
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1)
  #address
    margin: 0 0 24px
</style>
