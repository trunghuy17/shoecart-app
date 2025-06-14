import { useAppContext } from "../context/AppContext";
import CartItem from "./CartItem";

function Cart() {
  const { 
    handleDecrement,
    handleIncrement,
    handleRemove,
    cart
  } = useAppContext();
    
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
