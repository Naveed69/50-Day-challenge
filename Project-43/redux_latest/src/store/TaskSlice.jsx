import { createSclice, nanoid } from "@reduxjs/toolkit";
const intitialState = {
  todos: [],
};
const TaskSlice = createSclice({
  name: "todo",
  intitialState,
  reducers: {
    add_task: (state, action) => {
      const task = { id: nanoid, task: action.payload };
      state.todos.push(task);
    },
  },
});

export default TaskSlice.reducer;
