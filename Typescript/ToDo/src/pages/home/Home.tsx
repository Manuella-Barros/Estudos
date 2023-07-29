import style from './home.module.css';
import Form from "../../componentes/form/Form";
import TasksProcess from "./tasksProcess/TasksProcess";
import Tasks from './tasks/Tasks';
import { useState } from 'react';

function Home() {
    const [task, setTask] = useState<string[]>([]);
    const [auxTask, setAuxTask] = useState<string>('');
    const [checkCount, setCheckCount] = useState<number>(0);

    function addAuxTask(e: React.ChangeEvent<HTMLFormElement> ){
        e.preventDefault();
        
        setAuxTask(e.target.value);
    }
    
    function addTask(e: React.FormEvent){
        e.preventDefault();
        setTask(prevValue => [...prevValue, auxTask])
    }

    function checkTask(e: React.MouseEvent){
        if((e.target as HTMLInputElement).checked){
            setCheckCount(prevValue => prevValue + 1);
        } else{
            setCheckCount(prevValue => prevValue - 1);
        }
    }

    return (
        <main className={style.main}>
            <Form addAuxTask={addAuxTask} addTask={addTask}/>
            <TasksProcess task={task} checkCount={checkCount}/>
            <Tasks task={task} checkTask={checkTask} setTask={setTask}/>
        </main>
    );
}

export default Home;