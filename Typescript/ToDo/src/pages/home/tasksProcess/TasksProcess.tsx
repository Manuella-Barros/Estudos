import style from './tasksProcess.module.css';

interface TasksProcessProps{
    tasks: [],
    clickCount: number
}
 
function TasksProcess({ tasks, clickCount }: TasksProcessProps) {    
    return (
        <article className={style.mainTaksProcess}>
            <section>
                <p className={style.createdTasks}>Tarefas criadas</p>
                <p className={style.numTasks}>{tasks.length}</p>
            </section>
            <section>
                <p className={style.completedTasks}>Tarefas concluidas</p>
                <p className={style.numTasks}>{clickCount}</p>
            </section>
        </article>
    );
}

export default TasksProcess;