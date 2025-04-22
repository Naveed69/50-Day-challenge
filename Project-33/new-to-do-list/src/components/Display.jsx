import { useEffect, useState } from "react";
import "./Display.css";
import Card from "./Card/Card";
const Display = () => {
  const [tasks, setTasks] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ]);

  const [filteredTask, setFilteredTask] = useState([]);

  const [pageNo, setPageNo] = useState(1);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.task.value === "") return;
    setTasks([...tasks, e.target.task.value]);
    e.target.task.value = "";
  };

  useEffect(() => {
    const end = pageNo * 5;
    const start = end - 5;
    setFilteredTask(tasks.slice(start, end));
  }, [pageNo]);

  const handlePrev = () => {
    setPageNo(pageNo - 1);
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

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
      <div className="tasklist">
        {filteredTask.map((task, idx) => (
          <Card key={idx} id={idx} task={task} />
        ))}
      </div>
      <span className="btn">
        <button type="button" disabled={pageNo === 1} onClick={handlePrev}>
          Previues
        </button>
        <span className="pageno">{pageNo}</span>
        <button
          type="button"
          disabled={pageNo === Math.ceil(tasks.length / 5)}
          onClick={handleNext}
        >
          Next
        </button>
      </span>
    </div>
  );
};
export default Display;
