import { useState } from "react";
import "./Display.css";
const Display = () => {
  const [tasks, setTasks] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    setTasks([...tasks, e.target.task.value]);
    e.target.task.value = "";
  };
  console.log(tasks);
  return (
    <div className="container">
      <h1>To Do List</h1>

      <form onSubmit={(e) => handleClick(e)}>
        <input type="text" name="task" placeholder="Enter Task" />
        <button type="submit">Add</button>
      </form>
      <hr />
      <select className="select">
        <option>Non Completed Task</option>
        <option>Completed Task</option>
      </select>
      <div className="tasklist"></div>
      <span className="btn">
        <button>Previues</button>
        <span className="pageno">1</span>
        <button>Next</button>
      </span>
    </div>
  );
};
export default Display;
