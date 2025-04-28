import { UseCotext } from "../ContexApi/Cart/CartContext";
const Cart = () => {
  const useCart = UseCotext();
  console.log(useCart);
  const total = useCart.items.reduce((a, b) => a + b.price, 0);
  return (
    <span>
      <h1>Cart Items</h1>
      <ul>
        {useCart.items.map((item, idx) => (
          <li key={idx}>{item.item}</li>
        ))}
      </ul>
      <h5>Total Price: ${total}</h5>
    </span>
  );
};

export default Cart;
