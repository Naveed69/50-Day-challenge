import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};
const TaskSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add_task: (state, action) => {
      const task = { id: nanoid(), task: action.payload };
      state.todos.push(task);
    },
  },
});

export default TaskSlice.reducer;
export const { add_task } = TaskSlice.actions;
