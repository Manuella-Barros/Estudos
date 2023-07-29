import Checkbox from "../../../../componentes/checkbox/Checkbox";
import Trash from "../../../../componentes/trash/Trash";
import style from './singleTasks.module.css';

interface PropsSingleTask{
    taskText:string,
    checkTask: (e: React.MouseEvent) => void
}

function SingleTask({taskText, checkTask, removeTask}:PropsSingleTask) {
    //console.log(taskText)

    return (
        <section className={style.mainSingleTaks}>
            <Checkbox onClick={checkTask}/>
            <p className={style.task}>{taskText}</p>
            <Trash onClick={() => removeTask(taskText)}/>
        </section>
    );
}

export default SingleTask;