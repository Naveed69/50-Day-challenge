import { createContext, useState } from "react";

// Create the context
const MyContext = createContext(null);

// context provider

export const ContextProvider = (props) => {
  const [name, setName] = useState("Naveed");
  return (
    <MyContext.Provider value={{ name }}>{props.children}</MyContext.Provider>
  );
};

export default MyContext;
