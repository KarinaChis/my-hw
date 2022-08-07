import React from "react";
import styles from './App.module.css';
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";
import Login from "./components/Login/Login";

const App = () => {

    return(
      <div className = { styles.container }>
          <div className = { styles.appWrapper }>
              <Header />
              <Todo />
              <Login />
          </div>
      </div>
  )
}

export default App;