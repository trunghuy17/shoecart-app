import { useDispatch, useSelector } from "react-redux";
import type { Product, RootState } from "../types/Product";
import { addToCart } from "../redux/cart.action";

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart.cart);
  const isInCart = cart.some((item) => item.id === product.id)

  const handleAddToCart = (product: Product) => {
    const checkItem = cart.find((item)=> item.id === product.id);
    if (checkItem){
      const newCart = cart.map((item:Product) => 
          item.id === product.id
          ? {...item, quantity:(item.quantity ?? 0) + 1}
          : item
        )
      dispatch(addToCart(newCart))
      return;
    }
    const newCart = {
      ...product,
      quantity: 1,
    }
    dispatch(addToCart(newCart))
  };
  

  return (
    <div>
      <div className="shopItem">
        <div
          className="shopItem_image"
          style={{ backgroundColor: product.color }}
        >
          <img src={product.image} alt={product.name} />
        </div>
        <div className="shopItem_name">{product.name}</div>
        <div className="shopItem_description">{product.description}</div>
        <div className="shopItem_bottom">
          <div className="shopItem_price">${product.price.toFixed(2)}</div>

          {/* {isInCart ? (
            <div
              className="shopItem_button"
              style={{ opacity:'0.5', cursor: "default" }}
            >
              Added
            </div>
          ) : (
            <div
              className="shopItem_button"
              onClick={() => onAddToCart(product)}
            >
              Add to cart
            </div>
          )} */}
          <div
            className="shopItem_button"
            style={{ 
              opacity: isInCart ? '0.5' : 1, 
              cursor: isInCart ? "default" : 'cursor' 
            }}
            onClick={isInCart ? () => {} : () => handleAddToCart(product)}
          >
            {isInCart ? 'Added' : 'Add to cart'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
