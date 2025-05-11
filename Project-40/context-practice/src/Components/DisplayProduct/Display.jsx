import { Cart } from "../Cart/Cart";
import "./Display.css";
export const Display = () => {
  const Items = [
    { id: 1, item: "laptop", price: 10000 },
    { id: 1, item: "Pendrive", price: 100 },
    { id: 1, item: "i-Phone", price: 2500 },
  ];
  return (
    <div className="container">
      <div className="product-page">
        <h1>Products:</h1>
        <ul>
          {Items.map((t) => (
            <>
              <li key={t.id}>
                {t.item}
                <p>{t.price}</p>
              </li>
              <button>Add To Cart</button>
              <hr />
            </>
          ))}
        </ul>
      </div>
      <Cart />
    </div>
  );
};
