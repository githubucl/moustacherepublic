import {
  ADD_TO_CART,
} from '../actions'

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const size = action.payload

    if (state.cart.find((i) => i.size === size)) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.size === size) {
          const newAmount = cartItem.amount + 1

          return { ...cartItem, amount: newAmount }
        } else {
          return cartItem
        }
      })

      return { ...state, cart: tempCart, }
    } else {
      const newItem = {
        size: size,

      }
      return { ...state, cart: [...state.cart, newItem], }
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
