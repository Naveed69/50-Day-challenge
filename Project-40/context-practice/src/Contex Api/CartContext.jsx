import { useState, createContext, useContext } from "react";

const Cartcontext = createContext(null);

export const CartContextprovider = (props) => {
  const [cart, setCart] = useState([]);
  return (
    <Cartcontext.Provider value={{ cart, setCart, name: "Naveed" }}>
      {props.children}
    </Cartcontext.Provider>
  );
};

export const useCart = () => {
  const cart = useContext(Cartcontext);
  return cart;
};
