import type { IAction, IStateCart, Product } from "../types/Product";

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

    case 'INCREMENT_ITEM' : {
      return {
        ...state,
        cart: state.cart.map((item:Product) => 
          item.id === action.payload
          ? {...item, quantity:(item.quantity ?? 0) + 1}
          : item
        )
      }
    }

    case 'DECREASE_ITEM' : {
      return {
        ...state,
        cart: state.cart.map((item:Product) => 
          item.id === action.payload
          ? {...item, quantity:(item.quantity ?? 0) - 1}
          : item
        ).filter((item: Product) => item.quantity !== 0) 
      }
    }

    case 'REMOVE_ITEM' : {
      return {
        ...state,
        cart: state.cart.filter((item:Product) => item.id !== action.payload)
      }
    }
    default: 
      return state
  }
}