import React, { Component } from 'react';

class TextArea extends Component {
    render() {
        const { label, rows, placeholder, name, onChange, error, counters } = this.props;
        const countVal = counters[name]
        return (
            <>
                <label className="label">{ label }</label>
                <textarea 
                    rows        = { rows || 7 }
                    placeholder = { placeholder }
                    name        = { name }
                    onChange    = { onChange }
                    className   = "textArea"
                />
                <span className = { (countVal >= 0) ? "counter" : "disable" }>
                    { "Осталось " + countVal + "/600 символов" }
                </span>
                <span className = { (countVal < 0) ? "error" : "disable" }>
                    { "Превышен лимит символов в поле" }
                </span>
                <span className = "error">{ error[name] }</span>
            </>
        )
    }
}

export default TextArea;