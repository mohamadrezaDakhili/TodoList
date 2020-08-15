import React, { useState, useEffect } from "react";

function ToDoList() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: " this is a checklist for shop",
      checkList: [
        { id: 1, text: "first job", status: false },
        { id: 2, text: "second job", status: false },
      ],
    },
    {
      id: 2,
      text: " this is amother checklist for maktab",
      checkList: [
        { id: 1, text: "first job maktab", status: false },
        { id: 2, text: "second job maktab", status: false },
      ],
    },
  ]);
  return (
    <div>
      {todoList.map((item) => (
        <React.Fragment key={item.id}>
          <p>{item.text}</p>
          <ul>
            {item.checkList.map((checkitem) => (
              <li key={`${item.id}${checkitem.id}`}>{checkitem.text}</li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </div>
  );
}

export default ToDoList;
