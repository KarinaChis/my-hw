import React from 'react';
import styles from './header.module.css';

const Header = () => {
    const ACTIVE_TASK_TEXT = "Активных задач: "
    return (
        <div className={ styles.header }>
            <h1>Your name</h1>
            <div>{ ACTIVE_TASK_TEXT }</div>
        </div>
    )
}

export default Header;