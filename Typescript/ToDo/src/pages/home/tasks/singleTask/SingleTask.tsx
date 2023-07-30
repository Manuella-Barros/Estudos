import Checkbox from "../../../../componentes/checkbox/Checkbox";
import Trash from "../../../../componentes/trash/Trash";
import style from './singleTasks.module.css';

function SingleTask({ removeTask, id, taskText, getCheck, isCompleted }) {
    return (
        <section className={style.mainSingleTaks}>
            <Checkbox onClick={(e) => getCheck(e, id)}/>
            <p className={style[`task${isCompleted}`]}>{taskText}</p>
            <Trash onClick={(e) => removeTask(e, id)}/>
        </section>
    );
}

export default SingleTask;