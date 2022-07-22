import React, { Component } from 'react';
import Input from './Input';
import TextArea from './TextArea';

export class Form extends Component {
    render() {
        return (
            <div className='background'>
                <form className='form'>
                    <legend className='titleForm'>Создание анкеты</legend>
                    <Input 
                        type="text" 
                        label="Имя"
                        placeholder="Enter your firstname"
                    />
                    <Input 
                        type="text" 
                        label="Фамилия"
                        placeholder="Enter your lastname"
                    />
                    <Input 
                        type="date" 
                        label="Дата рождения"
                        placeholder="Enter your birthday"
                        // className={(this.state.date) ? 'hasValue' : ''}
                    />
                    <Input 
                        type="tel" 
                        label="Телефон"
                        placeholder="Enter your phone's number"
                    />
                    <Input 
                        type="url" 
                        label="Сайт"
                        placeholder="Enter your web-site"
                    />
                    <TextArea 
                        label="О себе" 
                        placeholder="Enter information about yourself"
                    />
                    <TextArea 
                        label="Стек технологий"
                        placeholder="Enter the information about the Stack of technologies used"
                    />
                    <TextArea 
                        label="Описание последнего проекта"
                        placeholder="Enter the Description of the last project"
                    />
                    <Input type="reset" name="Отмена"/>
                    <Input type="submit" name="Сохранить"/>                
                </form>
            </div>
        )
    }
}

export default Form;