import types from "./todo.types";

const initial_state = {
  todoList: [
    {
      id: 1,
      title: " to do 1",
      text: " this is a checklist for shop",
      checkList: [
        { id: 1, text: "first job", status: false },
        { id: 2, text: "second job", status: false },
      ],
    },
    {
      id: 2,
      title: " to do 2",
      text: " this is amother checklist for maktab",
      checkList: [
        { id: 1, text: "first job maktab", status: false },
        { id: 2, text: "second job maktab", status: false },
      ],
    },
  ],
};

const todoReducer = (state = initial_state, action) => {
  switch (action.type) {
    case types.ADD_TO_DO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    default:
      return state;
  }
};
export default todoReducer;
