import React, { useState } from "react";
import { Form, Input, FormGroup, Button, Label } from "reactstrap";
import { connect } from "react-redux";
import { addTodo } from "../../redux/Todo/todo.actions";
import { useHistory } from "react-router-dom";
function AddTodoForm({ addTodo }) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: 3,
      ...todo,
      checkList: checkItem,
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

export default connect(null, { addTodo })(AddTodoForm);
