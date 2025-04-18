import { useState } from "react";
import "./Display.css";
import Card from "./Card/Card";
const Display = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [idx, setIdx] = useState(1);
  const hanldeList = (e) => {
    e.preventDefault();
    if (e.target.task.value === "") return;
    setList([...list, { task: e.target.task.value, id: idx }]);
    // console.log(idx);
    setIdx(idx + 1);
    setInput("");
  };
  return (
    <div className="container">
      <h1>To Do List</h1>
      <form onSubmit={(e) => hanldeList(e)}>
        <input
          type="text"
          name="task"
          placeholder="Enter To Do Task"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type="submit">Add</button>
      </form>
      <hr />
      <div className="list">
        {list
          ? list.map((task) => (
              <Card task={task} setList={setList} list={list} key={task.id} />
            ))
          : null}
      </div>
    </div>
  );
};
export default Display;
