import React, { Component } from 'react';

class TextArea extends Component {
    render() {
        return (
            <>
                <label className="label">{this.props.label}</label>
                <textarea 
                    className="textArea"
                    rows={this.props.rows || 7}
                    placeholder={this.props.placeholder}
                />
            </>
        )
    }
}

export default TextArea;