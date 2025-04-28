import "./App.css";
import Display from "./Components/Display";
import { CartProvider } from "./ContexApi/Cart/CartContext";
function App() {
  return (
    <>
      <CartProvider>
        <Display />
      </CartProvider>
    </>
  );
}

export default App;
