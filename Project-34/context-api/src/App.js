import Child from "./components/Child";

import { ContextProvider } from "./context/MyContext";

// Provide the context to your app
const App = () => {
  // const [name] = useState("Naveed");

  return (
    <ContextProvider>
      <Child />
    </ContextProvider>
  );
};

export default App;
