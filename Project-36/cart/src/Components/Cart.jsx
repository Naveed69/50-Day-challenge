import { UseCart } from "../ContexApi/Cart/CartContext";
const Cart = () => {
  const cartitems = UseCart();
  const total = cartitems.items.reduce((a, b) => a + b.price, 0);
  return (
    <>
      <h1>Cart Items</h1>
      <ul>
        {cartitems &&
          cartitems.items.map((item) => <li key={item.item}>{item.item}</li>)}
      </ul>
      <h5>Total Price: ${total}</h5>
    </>
  );
};
export default Cart;
