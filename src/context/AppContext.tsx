import React, { useEffect, useState } from "react";
import type { Product } from "../types/Product";

interface AppContextProps {
  products: Product[],
  handleAddToCart: (product: Product) => void,
  handleDecrement: (id: number) => void,
  handleIncrement: (id: number) => void,
  handleRemove: (id: number) => void,
  totalPrice: number,
  totalItems: number,
  cart: Product[]
}

const AppContext = React.createContext<AppContextProps>({
  products: [],
  handleAddToCart: () => {},
  handleDecrement: () => {},
  handleIncrement: () => {},
  handleRemove: () => {},
  totalPrice: 0,
  totalItems: 0,
  cart: []
});

// Wrapper Component
export const AppProvider = ({ children }: React.PropsWithChildren) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  //call data tu shoeCart.json
  useEffect(() => {
    import("../data/shoeCart.json").then((res) => setProducts(res.default));
  }, []);

  //them vao gio hang
  const handleAddToCart = (product: Product) => {
    const checkItem = cart.find((item)=> item.id === product.id);
    if (checkItem){
      setCart(
        cart.map((item:Product) => 
          item.id === product.id
          ? {...item, quantity:(item.quantity ?? 0) + 1}
          : item
        )
      )
      return;
    }
    setCart([...cart, {...product, quantity:1}])
  };

  //tang so luong
  const handleIncrement = (id:number)=>{
    setCart(
      cart.map((item: Product)=>
        item.id === id
        ?{...item, quantity:(item.quantity ?? 0) + 1}
        : item
      )
    )
  }

  //giam so luong
  const handleDecrement = (id:number) =>{
    setCart((prevCart)=>
    prevCart
    .map((item)=>{
      if(item.id=== id){
        if((item.quantity ?? 1) <= 1)return null;
        return{...item, quantity:item.quantity!-1};
      }
      return item;
    })
    .filter((item) : item is Product => item !== null)
    )
  }

  //xoa san pham khoi gio hang
  const handleRemove = (id:number)=>{
    setCart(cart.filter((item:Product)=> item.id !== id))
  }

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity ?? 0),
    0
  );

  const totalItems = cart.length;


  return (
    <AppContext.Provider
      value={{
        products,
        handleAddToCart,
        handleDecrement,
        handleIncrement,
        handleRemove,
        totalPrice,
        totalItems,
        cart
      }}
    >
      {children}
    </AppContext.Provider>
  )
};

export const useAppContext = () => React.useContext(AppContext)