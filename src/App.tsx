import "./App.css";
import ProductCard from "./components/ProductCard";
import "./styles/styles.css";
import Cart from "./components/Cart";
import { useAppContext } from "./context/AppContext";

function App() {
  const { 
    products,
    handleAddToCart,
    handleDecrement,
    handleIncrement,
    handleRemove,
    totalPrice,
    totalItems,
    cart
  } = useAppContext();
  
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
