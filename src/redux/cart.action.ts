import type { Product } from "../types/Product"
import { ADD_TO_CART, DECREASE_ITEM, INCREMENT_ITEM, REMOVE_ITEM } from "./type"

export const addToCart = (product: Product | Product[]) => {
  return {
    type: ADD_TO_CART,
    payload: product
  }
}

export const incrementItem = (productId: number) => {
  return {
    type: INCREMENT_ITEM,
    payload: productId
  }
}

export const decreaseItem = (productId: number) => {
  return {
    type: DECREASE_ITEM,
    payload: productId
  }
}

export const removeItem = (productId: number) => {
  return {
    type: REMOVE_ITEM,
    payload: productId
  }
}


