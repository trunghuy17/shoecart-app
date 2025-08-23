import type { Product } from "../types/Product"

interface QuanlityProduct {
  dataSource: Product[],
  productId: number,
  quanlity: number
}

export const updateQuanlityProduct  = ({ dataSource, productId, quanlity }: QuanlityProduct) => {
  const result = dataSource.map((item:Product) => 
    item.id === productId
    ? {...item, quantity:(item.quantity ?? 0) + quanlity}
    : item
  ).filter((item: Product) => item.quantity !== 0) ;

  return result
}