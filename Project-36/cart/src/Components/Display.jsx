import { UseCart } from "../ContexApi/Cart/CartContext";
const Display = (props) => {
  const cartItems = UseCart();
  return (
    <>
      <ul>
        {" "}
        <li>
          {props.name} <p>Price: ${props.price}</p>
        </li>
      </ul>
      <button
        onClick={() =>
          cartItems.setItems([
            ...cartItems.items,
            { item: props.name, price: props.price },
          ])
        }
      >
        Add To Cart
      </button>
    </>
  );
};
export default Display;
