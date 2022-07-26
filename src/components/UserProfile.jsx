import React, { Component } from 'react';
import OutputField          from './OutputField';
import OutputTextArea       from './OutputTextArea';

class UserProfile extends Component {

    render(){
        const { firstName, lastName, birthday, phone, url, aboutUser, stack, lastProject } = this.props.person;
        return(
            <div className = { this.props.className }>
                <OutputField 
                    className   = "titleForm"
                    title       = " " 
                    value       = { firstName + " " + lastName }
                />
                <OutputField    title = "Дата рождения: "               value = { birthday }/>
                <OutputField    title = "Телефон: "                     value = { phone }/>
                <OutputField    title = "Сайт: "                        value = { url }/>
                <OutputTextArea title = "О себе: "                      value = { aboutUser }/>
                <OutputTextArea title = "Стек технологий: "             value = { stack }/>
                <OutputTextArea title = "Описание последнего проекта: " value = { lastProject }/>
            </div>  
        )
    }
}

export default UserProfile;