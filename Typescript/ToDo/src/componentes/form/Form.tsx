import Button from "../button/Button";
import Input from "../input/Input";
import style from './form.module.css';
import { useState } from 'react';

interface setTasksProps{
    id: number,
    taskText: string,
    isCompleted: boolean
}

interface FormProps{
    setTasks: React.Dispatch<React.SetStateAction<setTasksProps[]>>
}

function Form({ setTasks }: FormProps) {
    const [taskText, setTaskText] = useState('');
    let idAux;

    if(localStorage.getItem('idAux')){
        idAux = parseFloat(localStorage.getItem('idAux'));
    } else{
        localStorage.setItem('idAux', '0');
    }

    function getTaskText(e: React.FormEvent){ // Pega o input do usuario
        setTaskText((e.target as HTMLInputElement).value);
    }
    
    function addTaskText(e: React.FormEvent){ // Add o input na task quando apertar em enviar
        e.preventDefault();

        setTasks(prevValue => [...prevValue, {
                    id: idAux,
                    taskText: taskText,
                    isCompleted: false
                }
            ]
        )
        
        localStorage.setItem('idAux', `${idAux += 1}`);
    }

    return (
            <form onSubmit={addTaskText} className={style.main}>
                <Input onChange={getTaskText} required type="text" placeholder="Adicione uma nova tarefa" name="" id=""/>
                <Button type={'submit'}>Criar</Button>
            </form>
    );
}

export default Form;