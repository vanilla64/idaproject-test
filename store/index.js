export const state = () => ({
  isCartVisible: false,
  cards: [],
  categories: [],
  productsInCart: [],
  isSuccessOrder: false,
  isLoading: true,
  CARDS_KEY: 'cards'
})

export const mutations = {
  setCartVisible(state) {
    state.isCartVisible = !state.isCartVisible
  },
  saveCardsInLS(state, cardsArr) {
    localStorage.setItem(state.CARDS_KEY, JSON.stringify(cardsArr))
  },
  getCardsFromLS(state) {
    JSON.parse(localStorage.getItem(state.CARDS_KEY))
  },
  removeCardsFromLS(state) {
    localStorage.removeItem(state.CARDS_KEY)
  },
  setCards(state, cardsArr) {
    state.cards = cardsArr
  },
  addProductInCart(state, card) {
    state.productsInCart.push(card)
  },
  deleteProductFromCart(state, card) {
    state.productsInCart = state.productsInCart.filter(c => c.id !== card.id)
  },
  resetCart(state) {
    state.productsInCart = []
  },
  isSuccessOrderToggle(state) {
    state.isSuccessOrder = !state.isSuccessOrder
  },
  isOrderedToggle(state, card) {
    state.cards.forEach(c => {
      if (c.id === card.id) return c.isOrdered = !c.isOrdered
    })
  }
}
