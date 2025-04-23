import { useState } from "react";
import "./Card.css";
const Card = ({ task, id, tasks, setTasks }) => {
  const [edit, setEdit] = useState(false);
  const [editedValue, setEditedValue] = useState("");
  const handleEdit = () => {
    setEdit(true);
    setEditedValue(task.task);
  };

  const handleDelete = (task) => {
    const updatedList = [...tasks].filter((t) => (task.id !== t.id ? t : null));
    setTasks(updatedList);
  };
  const handleCancel = () => {
    setEdit(false);
    setEditedValue("");
  };
  return (
    <div className="card" key={id}>
      {edit ? (
        <input
          type="text"
          value={editedValue}
          onChange={(e) => setEditedValue(e.target.value)}
        />
      ) : (
        <div>{task.task}</div>
      )}
      {!edit ? (
        <span>
          <span className="edit" onClick={() => handleEdit(task)}>
            &#9998;
          </span>
          <span className="delete" onClick={() => handleDelete(task)}>
            &#x274C;
          </span>
        </span>
      ) : (
        <span>
          <span className="edit" onClick={() => handleEdit(task)}>
            Save
          </span>
          <span className="delete" onClick={handleCancel}>
            Cancel
          </span>
        </span>
      )}
    </div>
  );
};
export default Card;
