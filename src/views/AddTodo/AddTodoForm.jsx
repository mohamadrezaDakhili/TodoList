import React, { useState } from "react";
import { Form, Input, FormGroup, Button, Label } from "reactstrap";
import { addTodo } from "../../redux/Todo/todo.actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import types from "../../redux/Todo/todo.types";
function AddTodoForm() {
  let history = useHistory();
  const [todo, setTodo] = useState({
    title: "",
    text: "",
  });
  const [checkItem, setCheckItem] = useState([
    {
      id: 1,
      text: "",
      status: false,
    },
  ]);
  const addItem = () => {
    setCheckItem([...checkItem, { id: 1, text: "", status: false }]);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleChangeCheck = (event, id) => {
    setCheckItem(
      checkItem.map((item) =>
        item.id === id ? { ...item, text: event.target.value } : item
      )
    );
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // addTodo({
    //   id: 3,
    //   ...todo,
    //   checkList: checkItem,
    // });
    dispatch({
      type: types.ADD_TO_DO,
      payload: {
        id: 3,
        ...todo,
        checkList: checkItem,
      },
    });
    history.push("/");
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">title</Label>
          <Input
            value={todo.title}
            id="title"
            name="title"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="text">text</Label>
          <Input
            value={todo.text}
            id="text"
            name="text"
            onChange={handleChange}
          />
        </FormGroup>
        {checkItem.map((item) => (
          <FormGroup key={item.id}>
            <Label htmlFor="text">check item</Label>
            <Input
              value={item.text}
              onChange={(event) => handleChangeCheck(event, item.id)}
              id="text"
              name="text"
            />
          </FormGroup>
        ))}
        <Button onClick={addItem} type="button">
          Add check item
        </Button>
        <Button className="ml-2">save</Button>
      </Form>
    </div>
  );
}

export default AddTodoForm;
