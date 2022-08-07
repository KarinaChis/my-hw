import React, {useState} from 'react';
import styles from './form.module.css';
import {useDispatch} from "react-redux";

const Form = () => {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState("");

    const onChange = ( e ) => setNewTodo( e.target.value );

    const onClick = () => dispatch({
        type: "ADD_TODO",
        payload: newTodo
    })
    const onSubmit = ( e ) => {
        setNewTodo("")
        e.preventDefault();
    };
    return (
        <form onSubmit = { onSubmit } className = { styles.formWrapper }>
            <input
                type = "text"
                placeholder = "Enter a Todo..."
                className = { styles.inputField }
                onChange = { onChange }
                value = { newTodo }
            />
            <button type = "submit" className = { styles.submit } onClick = { onClick }>
                Add
            </button>
        </form>
    );
};

export default Form;