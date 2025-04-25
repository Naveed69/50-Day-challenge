import "./App.css";
import Counter from "./Components/Counter";
import { CounterProvider } from "./ContexApi/CounterContext";
function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default App;
