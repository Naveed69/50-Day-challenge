import Child from "./components/Child";

import { ContextProvider } from "./context/MyContext";

// Provide the context to your app
const App = () => {
  return (
    <ContextProvider>
      <Child />
    </ContextProvider>
  );
};

export default App;
