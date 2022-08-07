import React from 'react';
import styles from './form.module.css';

const Form = () => {
    const onSubmit = ( e ) => {
        e.preventDefault();
    }
    return (
        <form onSubmit = { onSubmit } className = { styles.formWrapper }>
            <input
                type = "text"
                placeholder = "Enter a Todo..."
                className = { styles.inputField }
            />
            <button type = "submit" className = { styles.submit }>
                Add
            </button>
        </form>
    );
};

export default Form;