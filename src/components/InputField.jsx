import React, { Component } from 'react';

class InputField extends Component {
    
    render() {
        const { label, type, placeholder, valueButton, name, onChange, onClick, value, maxLength, error = "" } = this.props;
        return (
            <>
                <label className = "label">{ label }</label>
                <input 
                    type        = { type || "text" } 
                    placeholder = { placeholder }
                    name        = { name }
                    onChange    = { onChange }
                    onClick     = { onClick }
                    value       = { valueButton }
                    className   = { ( name === "birthday" && value ) ? "inputField hasValue" : "inputField" }
                    maxLength   = { maxLength }
                />
                <span className = "error">{ error[name] }</span>
            </>   
        )
    }
}

export default InputField;