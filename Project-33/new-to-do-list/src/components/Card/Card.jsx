import { useState } from "react";
import "./Card.css";
const Card = ({ task, tasks, setTasks }) => {
  const [edit, setEdit] = useState(false);
  const [editedValue, setEditedValue] = useState("");
  const [modal, setModal] = useState(false);
  const [completedTasks, setComepletedTasks] = useState([]);

  const handleEdit = () => {
    setEdit(true);
    setEditedValue(task.task);
  };

  const handleSave = () => {
    if (editedValue.trim() === "") {
      alert("Value Can't be empty. Enter value!");
      return;
    }
    setTasks(
      [...tasks].map((t) =>
        task.id === t.id ? { ...t, task: editedValue } : t
      )
    );
    setEdit(false);
    setEditedValue("");
  };

  const handleCancel = () => {
    setEdit(false);
    setEditedValue("");
  };

  const handleDelete = () => {
    setModal(true);
  };

  const deleteValue = () => {
    const updatedList = [...tasks].filter((t) => (task.id !== t.id ? t : null));
    setTasks(updatedList);
    setModal(false);
  };

  const handleComepleted = () => {
    const comepletedtask = [...tasks].filter((t) =>
      task.id === t.id ? t : null
    );
    setComepletedTasks([...completedTasks, comepletedtask]);
    const updatedList = [...tasks].filter((t) => (task.id !== t.id ? t : null));
    setTasks(updatedList);
  };

  console.log(completedTasks);

  return (
    <div className="card">
      {edit ? (
        <input
          type="text"
          value={editedValue}
          onChange={(e) => setEditedValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
        />
      ) : (
        <div>{task.task}</div>
      )}
      {!edit ? (
        <span>
          <span
            className="completedSymbol"
            title="Mark Completed"
            onClick={handleComepleted}
          >
            &#10004;
          </span>
          <span className="edit" title="Edit" onClick={handleEdit}>
            &#9998;
          </span>
          <span className="delete" title="Delete" onClick={handleDelete}>
            &#x274C;
          </span>
        </span>
      ) : (
        <span>
          <span className="edit" onClick={handleSave}>
            Save
          </span>
          <span className="delete" onClick={handleCancel}>
            Cancel
          </span>
        </span>
      )}
      {modal && (
        <div className="modal">
          <p>
            Are you sure, you want to delete <strong>{task.task}</strong>?
          </p>
          <span>
            <button onClick={deleteValue}>Yes</button>
            <button onClick={() => setModal(false)}>No</button>
          </span>
        </div>
      )}
    </div>
  );
};
export default Card;
