<template>
  <div>
    <CartSubtitle v-bind:text="'Оформить заказ'" />
    <form
      class="order-form">
      <OrderFormInput
        v-bind:info="{
          type: 'text',
          id: 'name',
          name: 'name',
          placeholder: 'Ваше имя',
          // required: true
        }"
      />
      <OrderFormInput
        v-bind:info="{
          type: 'tel',
          id: 'phone',
          name: 'phone',
          placeholder: 'Телефон',
          // required: true
        }"
      />
      <OrderFormInput
        v-bind:info="{
          type: 'text',
          id: 'address',
          name: 'address',
          placeholder: 'Адрес',
          // required: true
        }"
      />
      <CartButton
        v-bind:onClick="onSubmit"
        v-bind:text="'Отправить'"
      />
    </form>
  </div>
</template>
<style lang="sass" scoped>
  div
    padding: 32px 0 0
  .order-form
    display: flex
    flex-direction: column
    width: 100%
    height: 300px

</style>
<script>
export default {
  methods: {
    setCartVisible() {
      this.$store.commit('setCartVisible')
    },
    resetCart() {
      this.$store.commit('resetCart')
    },
    isSuccessOrderToggle() {
      this.$store.commit('isSuccessOrderToggle')
    },
    onSubmit(evt) {
      evt.preventDefault()
      // this.setCartVisible()

      this.resetCart()
      this.isSuccessOrderToggle()
      console.log('SUBMIT')
    }
  },
}
</script>
