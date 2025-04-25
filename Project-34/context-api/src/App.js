import React, { useState } from "react";
import Child from "./components/Child";

import MyContext from "./context/MyContext";

// Provide the context to your app
const App = () => {
  const [name] = useState("Naveed");

  return (
    <MyContext.Provider value={name}>
      <Child />
    </MyContext.Provider>
  );
};

export default App;
