import React from "react";
import ToDoCard from "../../component/ToDoCard/ToDoCard";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
function ToDoList({ todoList }) {
  // const { todoList } = useSelector((state) => state.todo);
  return (
    <div>
      {todoList.map((item) => (
        <ToDoCard key={item.id} todo={item} />
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    todoList: state.todo.todoList,
  };
};
// export default ToDoList;
export default connect(mapStateToProps, {})(ToDoList);
