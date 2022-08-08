import React from "react";
import styles from "./todo.module.css";
import Form from "../Form/Form";
import TodoList from "../TodoList/TodoList";

const Todo = () => {
    return (
        <div className = { styles.todoWrapper }>
            <Form type = "todo"/>
            <TodoList />
        </div>
    )
}

export default Todo;