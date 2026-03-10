import TaskItem from "./TaskItem"
function TaskList({tasks,deleteTask,completeTask}) {
return(
<div className="bg-white p-6 rounded-xl shadow">
<h2 className="text-2xl font-semibold mb-4">
Tasks
</h2>
{tasks.length===0 ?
<p className="text-red-500">
No Tasks Yet
</p>
:
tasks.map(task=>(
<TaskItem
key={task.id}
task={task}
deleteTask={deleteTask}
completeTask={completeTask}
/>
))
}
</div>
)
}
export default TaskList