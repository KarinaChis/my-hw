import React from 'react';
import styles from './header.module.css';
import { useSelector } from "react-redux";

const Header = () => {
    const ACTIVE_TASK_TEXT = "Активных задач: ";
    const count = useSelector( state => state.count );
    return (
        <div className={ styles.header }>
            <h1>Your name</h1>
            <div>{ ACTIVE_TASK_TEXT + count}</div>
        </div>
    )
}

export default Header;