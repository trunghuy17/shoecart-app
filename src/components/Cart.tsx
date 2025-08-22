import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import type { RootState } from "../types/Product";
import { decreaseItem, incrementItem, removeItem } from "../redux/cart.action";

function Cart() {
  const cart = useSelector((state: RootState) => state.cart.cart)
  const dispatch = useDispatch()

  const handleIncrement = (id: number) => {
    dispatch(incrementItem(id))
  }

  const handleDecrement = (id: number) => {
    dispatch(decreaseItem(id))
  }

  const handleRemove = (id: number) => {
    dispatch(removeItem(id))
  }


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
