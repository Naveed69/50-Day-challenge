import { useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { addNewTask } from "./store/TaskSlice";
function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addinput = (e) => {
    e.preventDefault();
    dispatch(addNewTask(input));
    setInput("");
  };
  return (
    <>
      <h1>Hello </h1>
      <form onSubmit={addinput}>
        <input
          type="text"
          name="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}
export default App;
