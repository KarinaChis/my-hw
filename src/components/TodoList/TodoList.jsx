import React from 'react';
import styles from './todoList.module.css';
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
    const todos = [
        { id: 1, title: 'this is very big todo and i would like this is very big todo and i would like ', completed: false },
        { id: 2, title: 'this is very big ', completed: false },
        { id: 3, title: 'this is very big todo and i would like', completed: true },
        { id: 4, title: 'this is very big todo and i would like', completed: false },
        { id: 5, title: 'this is very big todo and i would like', completed: false },
        { id: 6, title: 'this is very big todo and i would ', completed: false },
        { id: 7, title: 'this is very big todo and i would ', completed: false },
        { id: 8, title: 'this is very big todo and i would like', completed: false },
        { id: 9, title: 'this is very big todo and i would ', completed: false },

    ];

    return(
        <ul className = { styles.todoList }>
            {todos.map((todo) => (
                <TodoItem id = { todo.id } title={ todo.title } key = { todo.id }/>
            ))}
        </ul>
    )
}

export default TodoList;