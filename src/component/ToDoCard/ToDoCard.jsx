import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import {
  deleteTodo,
  toggleTodoCheckItemStatus,
} from "../../redux/Todo/todo.actions";
import { connect } from "react-redux";
function ToDoCard({ todo, deleteTodo, toggleTodoCheckItemStatus }) {
  return (
    <React.Fragment key={todo.id}>
      <p>{todo.text}</p>
      <Link to={`/update/${todo.id}`}>Edit</Link>
      <Button onClick={() => deleteTodo(todo.id)}>Delete me!</Button>
      <ul>
        {todo.checkList.map((checkitem) => (
          <li key={`${todo.id}${checkitem.id}`}>
            {checkitem.status ? (
              <del>{checkitem.text}</del>
            ) : (
              <p>{checkitem.text}</p>
            )}
            <span
              onClick={() => toggleTodoCheckItemStatus(todo.id, checkitem.id)}
            >
              done!
            </span>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default connect(null, { deleteTodo, toggleTodoCheckItemStatus })(
  ToDoCard
);
