import NoTasks from './noTasks/NoTasks';
import SingleTask from './singleTask/SingleTask';

interface propsTasks{
    task: string[],
    checkTask: (e: React.MouseEvent) => void
}


function Tasks({task, checkTask, setTask}:propsTasks) {
    function removeTask(taskText){
        setTask( task.filter(task =>{
            if(task == taskText){
                console.log("tem " + task)
            } else{
                return task
            }
        }))
    }
    return (
        <article>
            {
                task.length > 0
                ?   task.map((text,i) =>{
                        return <SingleTask key={i} taskText={text} checkTask={checkTask} removeTask={removeTask}/>
                    })
                : <NoTasks/>
            }
            
        </article>
    );
}

export default Tasks;