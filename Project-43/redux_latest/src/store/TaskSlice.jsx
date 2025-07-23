import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addNewTask: (state, action) => {
      let newtask = { id: nanoid(), task: action.payload };
      state.todos.push(newtask);
    },
  },
});

export const { addNewTask } = TodoSlice.actions;
export default TodoSlice.reducer;
