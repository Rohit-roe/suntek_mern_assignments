function TaskItem({task,deleteTask,toggleTask}) {
return(
<div className="border p-3 mb-3 rounded flex justify-between items-center">
<div>
<p className={task.completed ?"line-through text-gray-400":""}>
{task.taskname}
</p>
<p className="text-sm text-gray-500">
Priority : {task.priority}
</p>
</div>
<div className="space-x-2">
<button onClick={()=>toggleTask(task.id)} className="bg-green-500 text-white px-2 py-1 rounded">
{task.completed ?
"Undo"
:
"Done"
}
</button>
<button onClick={()=>deleteTask(task.id)} className="bg-red-500 text-white px-2 py-1 rounded">
Delete
</button>
</div>
</div>
)
}
export default TaskItem