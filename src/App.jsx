import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import ThemeToggler from "./components/ThemeToggler";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <h1>Redux and Context API Example</h1>
      <ThemeToggler />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
