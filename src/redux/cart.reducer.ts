import type { IAction, IStateCart } from "../types/Product";

const initialState: IStateCart = {
  cart: [] 
}

export const cartReducer = (state = initialState, action: IAction) => {
  switch(action.type) {
    case 'CART/ADD_TO_CART': {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    }
    default: 
      return state
  }
}