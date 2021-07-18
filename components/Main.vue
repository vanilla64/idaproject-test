<template>
  <main class="main">
    <div class="main__heading">
      <h2 class="main__title">Каталог</h2>
      <div class="main__sorting">
        <span>Сортировать по: </span>
        <span>цене</span>
        <div class="main__triangle-icon" />
      </div>
    </div>
    <div class="main__content">
      <Navigation />
      <Propducts />
    </div>
    <Cart />
  </main>
</template>
<style lang="sass" scoped>
  .main
    max-width: $maxWrapperWidth
    margin: 0 auto

    &__heading
      padding: 32px 0 24px
      display: flex
      justify-content: space-between
      align-items: center

    &__title
      margin: 0
      font-style: normal
      font-weight: bold
      font-size: 32px
      line-height: 41px
      color: $black

    &__sorting
      display: flex
      align-items: center
      font-weight: normal
      font-size: 16px
      line-height: 21px
      color: $black
      span:nth-child(2)
        color: $grey
        margin: 0 4px 0 6px

    &__content
      display: flex
      justify-content: space-between

    &__triangle-icon
      background-image: url('/images/triangle-icon.svg')
      width: 5px
      height: 3px
      display: inline-block

</style>
