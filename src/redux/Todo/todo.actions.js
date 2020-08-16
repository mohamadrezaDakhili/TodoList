import types from "./todo.types";
// import store from "../store";

// export const addTodo = (todo) => {
//   store.dispatch({
//     type: types.ADD_TO_DO,
//     payload: todo,
//   });
// };
export const addTodo = (todo) => {
  return {
    type: types.ADD_TO_DO,
    payload: todo,
  };
};
export const editTodo = (todo) => {
  return {
    type: types.EDIT_TO_DO,
    payload: todo,
  };
};
