import { useContext } from "react";
import MyContext from "../context/MyContext";

// Use the context inside a component
const Child = () => {
  const userName = useContext(MyContext);

  return <h1>Hello, {userName.name}!</h1>;
};

export default Child;
