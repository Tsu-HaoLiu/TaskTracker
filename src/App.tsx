import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor app',
            day: 'Feb 5th at 2:33PM',
            reminder: true,
        }, 
        {
            id: 2,
            text: 'Meeting people',
            day: 'Feb 6th at 1:33PM',
            reminder: true,
        }, 
        {
            id: 3,
            text: 'Shopping things',
            day: 'Feb 5th at 3:19PM',
            reminder: false,
        }, 
        {
            id: 4,
            text: 'Crash Car',
            day: 'Feb 7th at 11:09AM',
            reminder: false,
        }, 
    ]);

    // Reminder toggle
    const toggleReminder = (id: number) => {
        setTasks(tasks.map((task) => 
        task.id === id ? 
        { ...task, reminder: !task.reminder} : task ));
        console.log('toggle', id);
    }

    // Add Task
    const addTask = (task: any) => {
        const id = Math.floor(Math.random() * 100);

        setTasks([...tasks, {id, ...task}]);
        console.log('add', tasks);
    }

    // Delete Task
    const deleteTask = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id));
        console.log('delete', id);
    }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> :
       'Task trackers is empty, my friend.'}
    </div>
  );
}

export default App;
