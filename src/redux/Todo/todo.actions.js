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

export const deleteTodo = (todoID) => {
  return {
    type: types.DELETE_TO_DO,
    payload: todoID,
  };
};

export const toggleTodoCheckItemStatus = (todoID, itemId) => {
  return {
    type: types.TOGGLE_CHECK_ITEM_TO_DO,
    payload: { todoID, itemId },
  };
};
