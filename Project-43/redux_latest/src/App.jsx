import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { add_task } from "./store/TaskSlice";
function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos);
  const addNewTask = (e) => {
    e.preventDefault();
    dispatch(add_task(input));
    setInput("");
  };
  return (
    <>
      <h1>Hello </h1>
      <form onSubmit={addNewTask}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
export default App;
