import React from 'react';
import styles from './todoList.module.css';
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
    const todos = useSelector( state => state.todos );
    if (!todos) return <div></div>
    return(
        <ul className = { styles.todoList }>
            {todos.map((todo) => (
                <TodoItem
                    id = { todo.id }
                    title = { todo.title }
                    key = { todo.id }
                    isCompleted = { todo.completed }
                />
            ))}
        </ul>
    )
}

export default TodoList;