import { useCart } from "../../Contex Api/CartContext";
export const Cart = () => {
  const { cart } = useCart();
  const total = cart.reduce((a, b) => a + b.price, 0);
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((t) => (
          <li key={t.id}>{t.item}</li>
        ))}
      </ul>
      <hr />
      <h4>Total: ${total}</h4>
    </div>
  );
};
