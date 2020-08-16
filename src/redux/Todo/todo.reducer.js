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
  const { type, payload } = action;
  switch (type) {
    case types.ADD_TO_DO:
      return {
        ...state,
        todoList: [...state.todoList, payload],
      };

    case types.EDIT_TO_DO:
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id == payload.id ? payload : item
        ),
      };
    default:
      return state;
  }
};
export default todoReducer;
