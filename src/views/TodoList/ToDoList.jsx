import React from "react";
import ToDoCard from "../../component/ToDoCard/ToDoCard";
import { useSelector } from "react-redux";
function ToDoList() {
  const { todoList } = useSelector((state) => state.todo);

  return (
    <div>
      {todoList.map((item) => (
        <ToDoCard key={item.id} todo={item} />
      ))}
    </div>
  );
}
export default ToDoList;
