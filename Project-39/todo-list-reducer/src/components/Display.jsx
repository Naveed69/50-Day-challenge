import { useReducer, useState } from "react";
import { Card } from "./Card";
export const Display = () => {
  const ACTIONS = {
    ADDTODO: "add-todo",
    DELETETODO: "delete-todo",
    COMPLETED: "completed-todo",
  };
  const [name, setName] = useState("");
  const [toDo, dispatch] = useReducer(reducer, []);

  function reducer(state, action) {
    switch (action.type) {
      case "add-todo":
        return [
          ...state,
          { id: Date.now(), task: action.payload.name, completed: false },
        ];
      case "completed-todo":
        return [...state].map((t) =>
          t.id === action.id ? { ...t, completed: !t.completed } : t
        );
      case "delete-todo":
        return [...state].filter((t) => t.id !== action.id);
      default:
        return state;
    }
  }

  //handling submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADDTODO, payload: { name: name } });
    setName("");
  };
  console.log(toDo);
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter task name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
      {toDo &&
        toDo.map((t) => (
          <Card task={t} key={t.id} dispatch={dispatch} ACTIONS={ACTIONS} />
        ))}
    </>
  );
};
