import { combineReducers } from "redux";
import todoReducer from "./Todo/todo.reducer";
export default combineReducers({
  todo: todoReducer,
});
