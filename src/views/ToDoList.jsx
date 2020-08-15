import React, { useState, useEffect } from "react";
import ToDoCard from "../component/ToDoCard/ToDoCard";
import { connect } from "react-redux";
function ToDoList({ todoList }) {
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
export default connect(mapStateToProps, {})(ToDoList);
