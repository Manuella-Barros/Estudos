import React from 'react';
import style from './Button.module.css'

function Button({ nomeClass, children, ...props }) {
    return <button className={style[nomeClass]} {...props}>{children}</button>;
}

export default Button;