import React, { Component } from 'react';
import styles               from '../App.module.css';


class OutputTextArea extends Component {
    render() {
        const { title, value } = this.props;
        const DEFAULT_FIELD_ROWS = "7";
        
        return (
            <div className = { styles.stringProfile } >
                <label className = { styles.outputFieldTitle }>{ title }</label>
                <textarea 
                    className   = { styles.outputField }
                    rows        = { DEFAULT_FIELD_ROWS }
                    value       = { value }
                    readOnly
                ></textarea>
            </div>
        )
    }
}

export default OutputTextArea;