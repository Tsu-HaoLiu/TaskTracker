import { FaTimes } from 'react-icons/fa';
import TaskProps from './iFace';

const Task = (props: {
    task: TaskProps, 
    onDelete: (id: number) => void,
    onToggle: (id: number) => void,
}) => {
  return (
    <div className={`task ${props.task.reminder ? 'reminder' : ''}` }
    onDoubleClick={() => props.onToggle(props.task.id)}>
      <h3>
        {props.task.text} 
        <FaTimes 
        style={{color: 'red', cursor: 'pointer'}} 
        onClick={() => props.onDelete(props.task.id)} 
        /> 
      </h3>
      <p>{props.task.day}</p>
    </div>
  )
}

export default Task
