import { useState } from "react";
import "./Card.css";
const Card = ({ task, setList, list }) => {
  const [modal, setModal] = useState(false);
  const [editValue, setEditValue] = useState("");
  const handleEdit = (i) => {
    setEditValue(task.task);
    setModal(true);
  };

  const handleDelete = (e) => {
    setList(
      [...list].filter((a) => {
        if (a.id !== e) return true;
        else return false;
      })
    );
  };

  const handleUpdate = () => {
    setList(
      list.map((t) => (t.id === task.id ? { ...t, task: editValue } : t))
    );
    setModal(false);
  };
  return (
    <>
      <p>
        {modal ? (
          <>
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <span className="btn">
              <span className="edit" onClick={handleUpdate}>
                Save✏️
              </span>
              <span className="delete" onClick={() => setModal(false)}>
                Cancel❌
              </span>
            </span>
          </>
        ) : (
          <>
            {task.task}
            <span className="btn">
              <span className="edit" onClick={() => handleEdit(task)}>
                ✏️
              </span>
              <span className="delete" onClick={() => handleDelete(task.id)}>
                ❌
              </span>
            </span>
          </>
        )}
      </p>
    </>
  );
};
export default Card;
