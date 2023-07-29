import Button from "../button/Button";
import Input from "../input/Input";
import style from './form.module.css';
import { useState } from 'react';

interface FormProps{
    addAuxTask: (e: React.ChangeEvent<HTMLFormElement>) => void,
    addTask: (e: React.FormEvent) => void
}

function Form({ addAuxTask, addTask}: FormProps) {
    return (
            <form onSubmit={addTask} className={style.main}>
                <Input onChange={addAuxTask} required type="text" placeholder="Adicione uma nova tarefa" name="" id=""/>
                <Button type={'submit'}>Criar</Button>
            </form>
    );
}

export default Form;