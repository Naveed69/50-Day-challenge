import { legacy_createStore as createStore } from "redux";
import Reducer from "../Reducer/Rreducer";

const store = createStore(Reducer);

export default store;