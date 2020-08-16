import React from "react";
import { Link } from "react-router-dom";
function ToDoCard({ todo }) {
  return (
    <React.Fragment key={todo.id}>
      <p>{todo.text}</p>
      <Link to={`/update/${todo.id}`}>Edit</Link>
      <ul>
        {todo.checkList.map((checkitem) => (
          <li key={`${todo.id}${checkitem.id}`}>
            {checkitem.status ? (
              <del>{checkitem.text}</del>
            ) : (
              <p>{checkitem.text}</p>
            )}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default ToDoCard;
