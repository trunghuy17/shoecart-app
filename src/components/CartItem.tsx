import type { Product } from "../types/Product";

type Props = {
  product: Product;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
};

function CartItem({ product, onIncrement, onDecrement, onRemove }: Props) {
  return (
    <div className="cardItem">
      <div className="cardItem_left">
        <div
          className="cardItem_image"
          style={{ backgroundColor: product.color }}
        >
          <img src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="cardItem_right">
        <div className="cardItem_name">{product.name}</div>
        <div className="cardItem_price">${product.price.toFixed(2)}</div>
        <div className="cartItem_actions">
          <div className="cartItem_count">
            <div className="cartItem_button" onClick={onDecrement}>
              -
            </div>
            <div className="cartItem_number">{product.quantity}</div>
            <div className="cartItem_button" onClick={onIncrement}>
              +
            </div>
          </div>
          <div className="cartItem_remove" onClick={onRemove}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
              alt="trash"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
