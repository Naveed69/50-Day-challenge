import { Display } from "./Components/DisplayProduct/Display";
import { CartContextprovider } from "./Contex Api/CartContext";

function App() {
  return (
    <CartContextprovider>
      <Display />
    </CartContextprovider>
  );
}

export default App;
