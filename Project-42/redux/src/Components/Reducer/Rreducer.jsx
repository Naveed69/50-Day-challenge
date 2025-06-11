import { actionType } from "../Actions_Types/Action_Types";
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
