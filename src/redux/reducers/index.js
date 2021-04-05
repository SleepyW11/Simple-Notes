import { createStore } from "redux";
import { loadState } from "./localStorage";
import noteReducer from "./noteReducer";

export default createStore(
  noteReducer,
  loadState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
