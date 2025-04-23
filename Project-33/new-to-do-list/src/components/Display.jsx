import { useEffect, useState } from "react";
import "./Display.css";
import Card from "./Card/Card";
const Display = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "1" },
    { id: 2, task: "2" },
    { id: 3, task: "3" },
    { id: 4, task: "4" },
    { id: 5, task: "5" },
    { id: 6, task: "6" },
    { id: 7, task: "7" },
    { id: 8, task: "8" },
    { id: 9, task: "9" },
    { id: 10, task: "10" },
  ]);
  const [ids, setIds] = useState(11);
  const [filteredTask, setFilteredTask] = useState([]);

  const [pageNo, setPageNo] = useState(1);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.task.value === "") return;
    setTasks([...tasks, { id: ids, task: e.target.task.value }]);
    e.target.task.value = "";
    setIds(ids + 1);
  };

  useEffect(() => {
    const end = pageNo * 5;
    const start = end - 5;
    setFilteredTask(tasks.slice(start, end));
  }, [pageNo, tasks]);

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
        <option>Not Completed Task</option>
        <option>Completed Task</option>
      </select>
      <div className="tasklist">
        {filteredTask.map((task) => (
          <Card key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
        ))}
      </div>
      <span className="btn">
        <button type="button" disabled={pageNo <= 1} onClick={handlePrev}>
          Previues
        </button>
        <span className="pageno">{pageNo}</span>
        <button
          type="button"
          disabled={pageNo >= Math.ceil(tasks.length / 5)}
          onClick={handleNext}
        >
          Next
        </button>
      </span>
    </div>
  );
};
export default Display;
