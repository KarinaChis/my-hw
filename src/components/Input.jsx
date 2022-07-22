import React, { Component } from 'react';

class Input extends Component {
    render() {
        return(
            <>
                <label className="label">{this.props.label}</label>
                <input 
                    className="inputField"
                    type={this.props.type} 
                    placeholder={this.props.placeholder}
                    value={this.props.name}
                />
            </>
            
        )
    }
}

export default Input;