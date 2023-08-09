import Checkbox from "../../../../componentes/checkbox/Checkbox";
import Trash from "../../../../componentes/trash/Trash";
import style from './singleTasks.module.css';

interface SingleTaskProps {
    id: string | number, 
    taskText: string, 
    isCompleted: boolean,
    removeTask: (id: number | string) => void,
    getCheck: (e: React.MouseEvent, id: string | number) => void, 
}

function SingleTask({ removeTask, id, taskText, getCheck, isCompleted }: SingleTaskProps) {
    return (
        <section className={style.mainSingleTaks}>
            <Checkbox onClick={(e: React.MouseEvent) => getCheck(e, id)}/>
            <p className={style[`task${isCompleted}`]}>{taskText}</p>
            <Trash onClick={() => removeTask(id)}/>
        </section>
    );
}

export default SingleTask;