import { createContext, useContext, useState } from "react";

//creating context
export const CartContext = createContext(null);

//providing context
export const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  return (
    <CartContext.Provider value={{ items, setItems, name: "naveed" }}>
      {props.children}
    </CartContext.Provider>
  );
};

//consume context
export const UseCart = () => {
  const cart = useContext(CartContext);
  return cart;
};
