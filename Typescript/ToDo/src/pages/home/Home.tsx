import style from './home.module.css';
import Form from "../../componentes/form/Form";
import TasksProcess from "./tasksProcess/TasksProcess";
import Tasks from './tasks/Tasks';
import { useEffect, useState } from 'react';

function Home() {
    const [tasks, setTasks] = useState<[]>([]);    
    const [clickCount, setClickCount] = useState<number>(0);
    
    if(tasks.length > 0){
        localStorage.setItem('tasksList', JSON.stringify(tasks))
    }
    useEffect(() => {
        if(localStorage.getItem('tasksList')){
            const tasksLocalStorage = JSON.parse(localStorage.getItem('tasksList'))
            setTasks(tasksLocalStorage)
        }    
    }, [])

    // if(localStorage.getItem('tasksList')){
    //     setTasks(JSON.parse(localStorage.getItem('tasksList')));
    // } else{
    //     if(tasks.length > 0){
    //         localStorage.setItem('tasksList', JSON.stringify(tasks))
    //     }
    // }

    function addClick(){ // Conta a quantidade de tasks completadas
        setClickCount(0);

        tasks.map(task => {
            if(task.isCompleted == true){
                setClickCount(prevValue => prevValue + 1)
            }
        })
    }

    useEffect(() => {
        addClick()
    },[tasks])

    return (
        <main className={style.main}>
            <Form setTasks={setTasks}/>
            <TasksProcess tasks={tasks} clickCount={clickCount}/>
            <Tasks tasks={tasks} addClick={addClick} setTasks={setTasks}/>
        </main>
    );
}

export default Home;