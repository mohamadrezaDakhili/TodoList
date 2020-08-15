import React from "react";
import { Provider } from "react-redux";
import ToDoList from "./views/ToDoList.jsx";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div>
        <ToDoList />
      </div>
    </Provider>
  );
}

export default App;
