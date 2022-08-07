import React from 'react';
import styles from './login.module.css';
import Form from "../Form/Form";

const Login = () => {
    return (
        <div className = { styles.loginWrapper }>
            <Form />
        </div>
    )
}

export default Login;