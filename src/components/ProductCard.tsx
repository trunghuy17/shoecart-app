import type { Product } from "../types/Product";

type Props = {
  product: Product;
  onAddToCart: (product: Product) => void;
  isInCart: boolean;
};

function ProductCard({ product, onAddToCart, isInCart }: Props) {
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

          {isInCart ? (
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
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
