import { Card } from "./Card";
const { useState, useReducer } = require("react");
const ACTION = {
  ADD_TODO: "add-todo",
  DELETE_TODO: "delete-todo",
  COMPLETED: "completed-todo",
};

export const Display = () => {
  const [state, dispatch] = useReducer(reducer, []);
  function reducer(state, action) {
    switch (action.type) {
      case ACTION.ADD_TODO:
        return [
          ...state,
          { task: action.payload.name, id: Date.now(), completed: false },
        ];
      case ACTION.DELETE_TODO:
        return [...state].filter((t) => t.id !== action.id);
      case ACTION.COMPLETED:
        return [...state].map((t) =>
          t.id === action.id ? { ...t, completed: !t.completed } : t
        );
      default:
        return state;
    }
  }
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTION.ADD_TODO, payload: { name: name } });
    setName("");
  };
  console.log(state);
  return (
    <>
      <h1>ToDo List</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </form>
      {state &&
        state.map((t) => (
          <Card task={t} dispatch={dispatch} ACTION={ACTION} key={t.id} />
        ))}
    </>
  );
};
