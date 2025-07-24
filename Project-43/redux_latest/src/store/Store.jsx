import { configureStore } from "@reduxjs/toolkit";
import todoSlicer from "./TaskSlice";

export const store = configureStore({
  reducer: todoSlicer,
});
