import { useSelector } from "react-redux";
import { useAppContext } from "../context/AppContext";
import CartItem from "./CartItem";
import type { RootState } from "../types/Product";

function Cart() {
  const { 
    handleDecrement,
    handleIncrement,
    handleRemove,
  } = useAppContext();

  const cart = useSelector((state: RootState) => state.cart.cart)

  return (
    <>
    
      <div className="cardBody">
        {cart.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            onIncrement={() => handleIncrement(product.id)}
            onDecrement={() => handleDecrement(product.id)}
            onRemove={() => handleRemove(product.id)}
          />
        ))}
      </div>
    </>
  );
}

export default Cart;
