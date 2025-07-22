import { configureStore } from "@reduxjs/toolkit";
import todos from "./TaskSlice";

export const store = configureStore({
  reducer: todos,
});
