import React from "react";

function ToDoCard({ todo }) {
  return (
    <React.Fragment key={todo.id}>
      <p>{todo.text}</p>
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
