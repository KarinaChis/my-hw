import React from 'react';
import styles from './todoItem.module.css';
import Delete from '../Icons/deleteIcon.png';
import Edit from '../Icons/editIcon.png';
import {useDispatch} from "react-redux";

function TodoItem({ id, title, isCompleted }) {
    const ALT_TEXT = {
        editIcon: "This is edit task icon",
        deleteIcon: "This is delete task icon"
    }
    const dispatch = useDispatch();
    const onChangeCompleted = ( ) => dispatch({
        type: "CHANGE_COMPLETED",
        payload: id
    })
    const onDelete = () => dispatch({
        type: "DELETE_TODO",
        payload: id
    })
    const onEdit = () => {}
    return (
        <li className = { styles.todoWrapper } >
            <textarea
                className = { isCompleted ? styles.todoOutputCompleted : styles.todoOutput }
                value = { title }
                readOnly
                onClick = { onChangeCompleted }
            />
            <button
                className = { styles.button }
                onClick = { onEdit }
            >
                <img src = { Edit } className = { styles.buttonImage } alt = { ALT_TEXT.editIcon }/>
            </button>
            <button
                className = { styles.button }
                onClick = { onDelete }
            >
                <img src = { Delete } className = { styles.buttonImage } alt = { ALT_TEXT.deleteIcon }/>
            </button>
        </li>
    )
}

export default TodoItem;