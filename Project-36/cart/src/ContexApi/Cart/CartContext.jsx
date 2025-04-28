import { createContext, useState, useContext } from "react";

const CartContext = createContext(null);

export const CartProvider = (props) => {
  const [items, setItem] = useState([]);
  return (
    <CartContext.Provider value={{ items, setItem, name: "naveed" }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const UseCotext = () => {
  const cart = useContext(CartContext);
  return cart;
};
