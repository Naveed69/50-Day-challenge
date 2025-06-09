let id = 0;
const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { id: ++id, task: action.payload.task, completion: false },
      ];
    case "REOMVE_TASK":
      return state.filter((id) => id !== action.payload.id);
    default:
      return state;
  }
};

export default Reducer;
