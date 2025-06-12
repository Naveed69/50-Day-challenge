import { legacy_createStore as createStore } from "redux";
import Reducer from "./Task";

const store = createStore(Reducer);

export default store;
