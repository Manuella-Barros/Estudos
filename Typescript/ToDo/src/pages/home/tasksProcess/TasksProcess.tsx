import style from './tasksProcess.module.css';

interface TasksProcessProps{
    task: string[],
    checkCount: number,
}

function TasksProcess({task, checkCount}: TasksProcessProps) {
    return (
        <article className={style.mainTaksProcess}>
            <section>
                <p className={style.createdTasks}>Tarefas criadas</p>
                <p className={style.numTasks}>{task.length}</p>
            </section>
            <section>
                <p className={style.completedTasks}>Tarefas concluidas</p>
                <p className={style.numTasks}>{checkCount}</p>
            </section>
        </article>
    );
}

export default TasksProcess;