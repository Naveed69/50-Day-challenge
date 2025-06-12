const actionType = {
  add_task: "ADD_TASK",
  remove_task: "REMOVE_TASK",
  completed: "COMPLETED",
};

// Actions

export const Add_Task = (task) => {
  return { type: actionType.add_task, payload: { task: task } };
};

export const Remove_Task = (id) => {
  return { type: actionType.remove_task, payload: { id: id } };
};

export const Completed_Task = (id) => {
  return { type: actionType.completed, payload: { id: id } };
};

//-----Reducer----------

let id = 0;
const Reducer = (state = [], action) => {
  switch (action.type) {
    case actionType.add_task:
      return [
        ...state,
        { id: ++id, task: action.payload.task, completion: false },
      ];
    case actionType.remove_task:
      return state.filter((task) => task.id !== action.payload.id);

    case actionType.completed:
      return state.map((t) =>
        t.id === action.payload.id ? { ...t, completion: !t.completion } : t
      );
    default:
      return state;
  }
};

export default Reducer;
