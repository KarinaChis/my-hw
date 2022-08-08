import React from "react";
import styles from './App.module.css';
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";

const App = () => {

    return(
        <div className = { styles.container }>
            <div className = { styles.appWrapper }>
                <Header />
                <Routes>
                    <Route path = "/login" element = {< Login />}/>
                    <Route path = "/todos" element = {< Todo />}/>
                </Routes>
            </div>
        </div>
  )
}

export default App;