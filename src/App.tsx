import "./App.css";
import ProductCard from "./components/ProductCard";
import "./styles/styles.css";
import Cart from "./components/Cart";
import { useAppContext } from "./context/AppContext";
import type { RootState } from "./types/Product";
import { useSelector } from "react-redux";

function App() {
  const { 
    products,
  } = useAppContext();
  
  const cart = useSelector((state: RootState) => state.cart.cart);
    const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity ?? 0),
    0
  ); // 100$
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
              <span>Total: {cart && cart.length}</span>
            </div>
            <div className="cardTitle">
              <span>Your cart</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <Cart />
          </div>
      </div>
    </>
  );
}

export default App;
