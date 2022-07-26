import React, { Component } from 'react';

class OutputTextArea extends Component {
    render() {
        const { title, value } = this.props;
        return (
            <div className = { "stringProfile" } >
                <label className = "label outputFieldTitle">{ title }</label>
                <textarea 
                    className   = "outputField"
                    rows        =  "7" 
                    value       = { value }
                    readOnly
                ></textarea>
            </div>
        )
    }
}

export default OutputTextArea;