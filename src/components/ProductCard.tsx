import { useAppContext } from "../context/AppContext";
import type { Product } from "../types/Product";

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  const { handleAddToCart, cart }  = useAppContext();
  const isInCart = cart.some((item) => item.id === product.id)

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
