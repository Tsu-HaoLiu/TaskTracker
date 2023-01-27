import Task from "./Task";
import TaskProps from './iFace';

const Tasks = ( props : { 
    tasks: TaskProps[],
    onDelete: (id: number) => void,
    onToggle: (id: number) => void,
}) => {

    // console.log(props);

    return (
        <>
            {props.tasks.map((task) => (
                <Task 
                key={task.id} 
                task={task} 
                onDelete={props.onDelete}
                onToggle={props.onToggle} 
                />
            ))}
        </>
    )
}

export default Tasks