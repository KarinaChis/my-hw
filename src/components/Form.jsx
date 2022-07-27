import React, { useState } from 'react';
import Input                from './InputField';
import TextArea             from './TextArea';
import styles               from './Form.module.css';


function Form ( props ) {

    const FORM_TITLE = "Создание анкеты";
    // let person     = props.person;
    let isData     = props.isData;
    const initialPerson = {
        firstName: "", 
        lastName: "", 
        birthday: "", 
        phone: "", 
        url: "", 
        aboutUser: "", 
        stack: "", 
        lastProject: "",
    }
    const initialCounter = {
        aboutUser:      600,
        stack:          600,
        lastProject:    600,
    }
    let [ person, setPerson ]     = useState( initialPerson );
    let [ errors, setErrors ]     = useState( initialPerson );
    let [ counters, setCounters ] = useState( initialCounter );

    
    const onChange = ( e ) => {
        const fieldName  = e.target.name;
        const countValue = 600 - e.target.value.length;
        errors[fieldName] = ""; 

        if ( e.target.type === "tel" ) {
            const matchedString = e.target.value.replace(/\D/g, "").match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);
            e.target.value = !matchedString[2] ? matchedString[1] 
                : matchedString[1] + "-" + matchedString[2] 
                + (matchedString[3] ? "-" + matchedString[3] : "") 
                + (matchedString[4] ? "-" + matchedString[4] : "");
        }
        setPerson({...person, [ fieldName ] : e.target.value })

        console.log("person ", person)
        console.log("fieldName  ", fieldName)
        console.log("e.target.value  ", e.target.value)



        if ( e.target.className === styles.textArea ) counters[ fieldName ] = countValue;
    }

    const formValidation = ( e ) => {
        let isValid = true;
        // console.log("person")

        for( let i in person ) {
            if ( person[i] < 1 ) errors[i] = "Поле пустое. Заполните пожалуйста" 
            else if (( i === "firstName" || i === "lastName" ) && person[i].trim().charAt(0) !== person[i].charAt(0).toUpperCase() ){
                // setErrors({...errors, [ i ] : "Используйте заглавную букву для написания первого символа" })
                errors[i] = "Используйте заглавную букву для написания первого символа"
            } else if ( i === "phone" && person[i].trim() === person[i].trim().replace(/^[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}$/,'')){
                // setErrors({...errors, [ i ] : 'Введите номер согласно шаблону "7-7777-77-77"' })
                errors[i] = 'Введите номер согласно шаблону "7-7777-77-77"';
            } else if ( i === "url" && person[i].trim() === person[i].trim().replace(/^https:\/\//,'')){
                // setErrors({...errors, [ i ] : 'Введите url согласно шаблону "https://..."' })
                errors[i] = 'Введите url согласно шаблону "https://..."';
            }  else if ( person[i].length > 600 ){
                // setErrors({...errors, [ i ] : " " })
                errors[i] = " ";
            } else 
            // setErrors({...errors, [ i ] : "" })
            
            setErrors({...errors, [ i ] : person[i] })
            console.log("errors ", errors)
            console.log("[i] ", i)

            console.log("person[i] ", person[i])

        }

        Object.values( errors ).forEach(( val ) => {
            if( val.length > 0 ) return isValid = false
        });
        return isValid;
    }

    const onSubmit = ( e ) => {
        isData = formValidation();
        if ( isData ) { 
            props.changeData({ isData, person });
            resetForm() 
        }
        e.preventDefault();
    }

    const resetForm = () =>{ 
        setPerson( initialPerson )
        setErrors( initialPerson );
        setCounters( initialCounter );
    }

    const { firstName, lastName, birthday, phone, url, aboutUser, stack, lastProject } = person;


    return (
        <form 
            className   = { props.className }
            onSubmit    = { onSubmit } 
        >
            <legend className = { styles.titleForm }>{ FORM_TITLE }</legend>
            <Input 
                label       = "Имя"
                placeholder = "Введите свое имя"
                name        = "firstName"
                value       = { firstName }
                onChange    = { onChange }
                error       = { errors }
            />
            <Input 
                label       = "Фамилия"
                placeholder = "Введите свою фамилию"
                name        = "lastName"
                value       = { lastName }
                onChange    = { onChange }
                error       = { errors }
            />
            <Input 
                type        = "date" 
                label       = "Дата рождения"
                name        = "birthday"
                value       = { birthday }
                onChange    = { onChange }
                error       = { errors }
            />
            <Input 
                type        = "tel" 
                label       = "Телефон"
                placeholder = "Введите свой номер телефона"
                name        = "phone"
                value       = { phone }
                onChange    = { onChange }
                maxLength   = "12"
                error       = { errors }
            />
            <Input 
                type        = "url" 
                label       = "Сайт"
                placeholder = "Введите ссылку на сайт"
                name        = "url"
                value       = { url }
                onChange    = { onChange }
                error       = { errors }
            />
            <TextArea 
                label       = "О себе" 
                placeholder = "Введите информацию о себе"
                name        = "aboutUser"
                value       = { aboutUser }
                onChange    = { onChange }
                error       = { errors }
                counters    = { counters }
            />
            <TextArea 
                label       = "Стек технологий"
                placeholder = "Введите используемый стек технологий"
                name        = "stack"
                value       = { stack }
                onChange    = { onChange }
                error       = { errors }
                counters    = { counters }
            />
            <TextArea 
                label       = "Описание последнего проекта"
                placeholder = "Введите описание последнего проекта"
                name        = "lastProject"
                value       = { lastProject }
                onChange    = { onChange }
                error       = { errors }
                counters    = { counters }
            />
            <Input 
                type        = "reset"  
                valueButton = "Отмена" 
                onClick     = { resetForm }
            />
            <Input type = "submit" valueButton = "Сохранить"/>                
        </form>
    )
}

export default Form