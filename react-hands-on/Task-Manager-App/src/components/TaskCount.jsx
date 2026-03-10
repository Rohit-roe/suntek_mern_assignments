function TaskCount({tasks}) {
const completed=tasks.filter(task=>task.completed).length
return(
<div className="bg-white p-6 rounded-xl shadow">
<h2 className="text-2xl font-semibold mb-4">
Task Stats
</h2>
<p>
Total Tasks :
{tasks.length}
</p>
<p>
Completed :
{completed}
</p>
</div>
)
}
export default TaskCount