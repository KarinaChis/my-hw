import React from 'react';
import styles from './todoItem.module.css';
import Delete from '../Icons/deleteIcon.png';
import Edit from '../Icons/editIcon.png';

function TodoItem({ id, title }) {
    const ALT_TEXT = {
        editIcon: "This is edit task icon",
        deleteIcon: "This is delete task icon"
    }

    return (
        <li className={ styles.todoWrapper } >
            <textarea
                className = { styles.todoOutput }
                value = { title }
                readOnly
            />
            <button className = { styles.button }>
                <img src = { Edit } className = { styles.buttonImage } alt = { ALT_TEXT.editIcon }/>
            </button>
            <button className = { styles.button }>
                <img src = { Delete } className = { styles.buttonImage } alt = { ALT_TEXT.deleteIcon }/>
            </button>
        </li>
    )
}

export default TodoItem;