import React from "react";
import { Provider } from "react-redux";
import ToDoList from "./views/TodoList/ToDoList";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddTodoForm from "./views/AddTodo/AddTodoForm";
import { Container } from "reactstrap";
function App() {
  return (
    <Provider store={store}>
      <Container>
        <Router>
          <Switch>
            <Route path="/" exact>
              <ToDoList />
            </Route>
            <Route path="/add">
              <AddTodoForm />
            </Route>
            <Route path="/update/:id">
              <AddTodoForm />
            </Route>
            <Route path="/todo/:id"></Route>
          </Switch>
        </Router>
      </Container>
    </Provider>
  );
}

export default App;
