import "./Display.css";
import Cart from "./Cart";
import { UseCotext } from "../ContexApi/Cart/CartContext";
const Display = () => {
  const cartUse = UseCotext();
  const items = [
    { item: "Laptop", price: 10000 },
    { item: "Pendrive", price: 100 },
    { item: "Mobile", price: 3000 },
    { item: "Cable", price: 10 },
  ];
  return (
    <div className="container">
      <span>
        <h1>Products</h1>
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>
              {item.item}
              <p>{item.price}</p>
              <button
                type="button"
                onClick={() =>
                  cartUse.setItem([
                    ...cartUse.items,
                    { item: item.item, price: item.price },
                  ])
                }
              >
                Add to Cart
              </button>
              <hr />
            </li>
          ))}
        </ul>
      </span>
      <Cart />
    </div>
  );
};

export default Display;
