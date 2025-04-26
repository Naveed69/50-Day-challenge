import { createContext, useContext, useState } from "react";
export const CartContext = createContext(null);

export const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  return (
    <CartContext.Provider value={{ items, setItems, name: "naveed" }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const UseCart = () => {
  const cart = useContext(CartContext);
  return cart;
};
