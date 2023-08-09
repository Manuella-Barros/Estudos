import { tasksProps } from '../Home';
import NoTasks from './noTasks/NoTasks';
import SingleTask from './singleTask/SingleTask';

interface TasksProps{
    tasks: tasksProps[],
    addClick: () => void,
    setTasks: React.Dispatch<React.SetStateAction<tasksProps[]>>
}

function Tasks({ tasks, addClick, setTasks }: TasksProps) {
    function getCheck(e: React.MouseEvent, id: number | string){  // pega as info da task clicada
        let checkIsClicked = (e.target as HTMLInputElement).checked; //guarda ta cheked ou n

        tasks.map(task => {
            if(task.id == id){ // busca a tag selecionada pelo id
                task.isCompleted = checkIsClicked // muda o valor do objeto
                addClick() // Conta a quantidade de tasks completadas
            }
        })
    }

    function removeTask(id: number | string){
        setTasks(
            tasks.filter(task => { // Retorna só oq n foi removido de acordo com o id
                if(task.id != id){
                    return task
                }
            })
        )
    }

    return (
        <article>
            {
                tasks.length > 0
                ? tasks.map(task => {
                    return <SingleTask 
                            key={task.id} 
                            removeTask={removeTask}
                            id={task.id} 
                            taskText={task.taskText} 
                            getCheck={getCheck}
                            isCompleted={task.isCompleted}
                        />
                    })
                : <NoTasks/>
            }     
        </article>
    );
}

export default Tasks;