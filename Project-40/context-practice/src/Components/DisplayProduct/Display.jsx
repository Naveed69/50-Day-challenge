import { Cart } from "../Cart/Cart";
import { useCart } from "../../Contex Api/CartContext";
import "./Display.css";
export const Display = () => {
  const { cart, setCart } = useCart();
  const Items = [
    { id: 1, item: "Laptop", price: 12000 },
    { id: 2, item: "Pendrive", price: 180 },
    { id: 3, item: "i-Phone", price: 2500 },
  ];
  return (
    <div className="container">
      <div className="product-page">
        <h1>Products:</h1>
        <ul>
          {Items.map((t) => (
            <li key={t.id}>
              {t.item}
              <p>$ {t.price}</p>
              <button
                onClick={() =>
                  setCart([...cart, { id: t.id, item: t.item, price: t.price }])
                }
              >
                Add To Cart
              </button>
              <hr />
            </li>
          ))}
        </ul>
      </div>
      <Cart />
    </div>
  );
};
