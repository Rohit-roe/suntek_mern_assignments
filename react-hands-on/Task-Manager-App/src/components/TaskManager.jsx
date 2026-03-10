import { useState } from "react"
import AddTask from "./AddTask"
import TaskList from "./TaskList"
import TaskCount from "./TaskCount"
function TaskManager() {
let [tasks,setTasks]=useState([])
const addNewTask=(taskObj)=>{
const newTask={
 ...taskObj,
 completed:false
}
setTasks([...tasks,newTask])
}
const deleteTask=(id)=>{
setTasks(
tasks.filter(task=>task.id!==id)
)
}
const completeTask=(id)=>{
setTasks(
tasks.map(task =>
task.id===id ?
{...task,completed:!task.completed}
:task
)
)
}
return(
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-3 gap-6">
<AddTask addNewTask={addNewTask}/>
<TaskList
tasks={tasks}
deleteTask={deleteTask}
completeTask={completeTask}
/>
<TaskCount tasks={tasks}/>
</div>
</div>
)
}
export default TaskManager