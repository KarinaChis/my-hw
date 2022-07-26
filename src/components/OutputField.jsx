import React, { Component } from 'react';

class OutputField extends Component {

    render(){
        let { className, title, value } = this.props;

        if ( title === "Дата рождения: " && value ) {
            value = value.slice(8) + "." + value.slice(5,7) + "." + value.slice(0,4)
        }
        return(
            <div className = { className || "stringProfile" } >
                <div className = "label outputFieldTitle">{ title }</div>
                <div className = "outputField">{ value }</div>
            </div>
        )
    }
}

export default OutputField;