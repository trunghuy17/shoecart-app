import type { Product } from "../types/Product"

export const addToCart = (product: Product | Product[]) => {
  return {
    type: 'CART/ADD_TO_CART',
    payload: product
  }
}