<template>
  <li>
    <NuxtLink active-class="link_active" class="link" exact :to="link">
      {{ category.name }}
    </NuxtLink>
  </li>
</template>

<script>
  export default {
    props: ['category', 'to'],
    computed: {
      link() {
        // return this.to === 1 ? '/' : '/category/' + this.to
        return '/category/' + this.to
      }
    },
    // mounted() {
    //   console.log(this.link)
    // }
  }
</script>

<style lang="sass" scoped>
  .link
    font-weight: normal
    font-size: 16px
    line-height: 21px
    color: $greyLight
    transition: $transitionTimeHover
    text-decoration: none
    cursor: pointer
    &:hover
      color: $grey
    &_active
      color: $black
      text-decoration: underline
</style>
