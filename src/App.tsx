import "./App.css";
import type { Product } from "./types/Product";
import ProductCard from "./components/ProductCard";
import "./styles/styles.css";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  //call data tu shoeCart.json
  useEffect(() => {
    import("./data/shoeCart.json").then((res) => setProducts(res.default));
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
    }
    else{
      setCart([...cart, {...product, quantity:1}])
    }
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
    <>
      <div className="mainContent">
        <div className="card">
          <div className="cardTop">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
              width={50}
            />
          </div>
          <div className="cardTitle">Our Products</div>
          <div className="cardBody">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                isInCart={cart.some((item) => item.id === product.id)}
              />
            ))}
          </div>
        </div>
        <div className="card">
          <div className="cardTop">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
              width={50}
            />
            <span>Total: {totalItems}</span>
          </div>
          <div className="cardTitle">
            <span>Your cart</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <Cart
            cartItems={cart}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onRemove={handleRemove}
          />
        </div>
      </div>
    </>
  );
}

export default App;
