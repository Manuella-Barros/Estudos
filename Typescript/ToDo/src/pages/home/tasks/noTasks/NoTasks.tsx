import style from './noTasks.module.css';

function NoTasks() {
    return (
        <article className={style.mainNoTasks}>
            <p><i className="fa-solid fa-list-check"></i></p>
            <h2>Você ainda não possui tarefas registradas</h2>
            <h3>Crie tarefas e organize seus itens a fazer</h3>
        </article>
    );
}

export default NoTasks;