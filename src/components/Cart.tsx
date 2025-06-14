import type { Product } from "../types/Product";
import CartItem from "./CartItem";

type Props = {
  cartItems: Product[];
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onRemove: (id: number) => void;
};

function Cart({
  cartItems,
  onIncrement,
  onDecrement,
  onRemove,
}: Props) {
  return (
    <>
    
      <div className="cardBody">
        {cartItems.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            onIncrement={() => onIncrement(product.id)}
            onDecrement={() => onDecrement(product.id)}
            onRemove={() => onRemove(product.id)}
          />
        ))}
      </div>
    </>
  );
}

export default Cart;
