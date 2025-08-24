export interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  color: string;
  quantity?:number
}


export interface IStateCart {
  cart: Product[]
  products: Product[]
}

export interface IAction {
  type: string,
  payload: any
}

export interface RootState {
  cart: IStateCart
}