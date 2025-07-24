import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addNewTask: (state, action) => {
      let newTask = { id: nanoid(), task: action.payload };
      state.todos.push(newTask);
    },
  },
});

export const { addNewTask } = todoSlice.actions;
export default todoSlice.reducer;
