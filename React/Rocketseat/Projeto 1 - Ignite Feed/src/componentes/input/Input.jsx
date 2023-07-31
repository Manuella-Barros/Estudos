import React from 'react';
import style from './Input.module.css'

function Input({ type, placeholder, ...props}) {
    return (
        <input className={style.input} type={type} placeholder={placeholder} {...props}/>
    );
}

export default Input;