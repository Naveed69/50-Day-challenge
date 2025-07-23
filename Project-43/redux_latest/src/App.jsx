import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  return (
    <>
      <h1>Hello </h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input />
    </>
  );
}
export default App;
