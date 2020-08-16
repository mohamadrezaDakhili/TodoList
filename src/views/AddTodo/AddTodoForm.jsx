import React, { useState } from "react";
import { Form, Input, FormGroup, Button, Label } from "reactstrap";
import { addTodo, editTodo } from "../../redux/Todo/todo.actions";
import { useHistory } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { useSelector } from "react-redux";
import types from "../../redux/Todo/todo.types";
import { createStructuredSelector } from "reselect";
import { todoId } from "../../redux/Todo/todo.selectors";
import { useParams } from "react-router-dom";
function AddTodoForm({ addTodo, todoId, editTodo }) {
  // const todoId2 = useSelector((state) => state.todo.todoList.length + 1);
  let history = useHistory();
  let { id } = useParams();

  const todoObject = useSelector((state) =>
    state.todo.todoList.find((item) => item.id == id)
  );
  const [todo, setTodo] = useState(
    todoObject
      ? { title: todoObject.title, text: todoObject.text }
      : {
          title: "",
          text: "",
        }
  );
  const [checkItem, setCheckItem] = useState(
    todoObject
      ? todoObject.checkList
      : [
          {
            id: 1,
            text: "",
            status: false,
          },
        ]
  );
  const addItem = () => {
    setCheckItem([
      ...checkItem,
      { id: checkItem.length + 1, text: "", status: false },
    ]);
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

  // const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    todoObject
      ? todoObject &&
        editTodo({
          id: todoObject.id,
          ...todo,
          checkList: checkItem,
        })
      : addTodo({
          id: todoId,
          ...todo,
          checkList: checkItem,
        });
    // dispatch({
    //   type: types.ADD_TO_DO,
    //   payload: {
    //     id: 3,
    //     ...todo,
    //     checkList: checkItem,
    //   },
    // });
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

const mapStateToProps = createStructuredSelector({
  todoId,
});
// export default AddTodoForm;
export default connect(mapStateToProps, { addTodo, editTodo })(AddTodoForm);
