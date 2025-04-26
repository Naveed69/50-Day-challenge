import "./App.css";
import Cart from "./Components/Cart";
import Display from "./Components/Display";
import { CartProvider } from "./ContexApi/Cart/CartContext";

function App() {
  return (
    <CartProvider>
      <Display name={"Laptop"} price={10000} />
      <Display name={"Pendrive"} price={200} />
      <Display name={"Mouse"} price={100} />
      <Display name={"Mobile"} price={5000} />
      <Cart />
    </CartProvider>
  );
}

export default App;
