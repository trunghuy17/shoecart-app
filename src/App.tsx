import "./App.css";
import ProductCard from "./components/ProductCard";
import "./styles/styles.css";
import Cart from "./components/Cart";
import type { RootState } from "./types/Product";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GET_PRODUCT } from "./redux/type";

function App() {
  const { products, cart } = useSelector((state: RootState) => state.cart);

    const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity ?? 0),
    0
  ); // 100$

  const dispatch = useDispatch()

  useEffect(() => {
    import("./data/shoeCart.json").then((res) => dispatch({
      type: GET_PRODUCT,
      payload: res.default
    }));
  },[])

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
