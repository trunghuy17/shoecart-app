import type { IAction, IStateCart, Product } from "../types/Product";
import { updateQuanlityProduct } from "../utils/updateQuantityProduct";
import { ADD_TO_CART, DECREASE_ITEM, INCREMENT_ITEM, REMOVE_ITEM } from "./type"

const initialState: IStateCart = {
  cart: [] 
}

export const cartReducer = (state = initialState, action: IAction) => {
  switch(action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    }

    case INCREMENT_ITEM: {
      return {
        ...state,
        cart: updateQuanlityProduct({
          dataSource: state.cart,
          productId: action.payload,
          quanlity: 1
        })
      }
    }

    case DECREASE_ITEM : {
      return {
        ...state,
        cart: updateQuanlityProduct({
          dataSource: state.cart,
          productId: action.payload,
          quanlity: -1
        })
      }
    }

    case REMOVE_ITEM : {
      return {
        ...state,
        cart: state.cart.filter((item:Product) => item.id !== action.payload)
      }
    }
    default: 
      return state
  }
}