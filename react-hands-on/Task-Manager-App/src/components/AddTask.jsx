import { useForm } from "react-hook-form"
function AddTask({addNewTask}) {
const {register,handleSubmit,reset,formState:{errors}}=useForm()
const submitForm=(taskObj)=>{
addNewTask(taskObj)
reset()
}
return(
<div className="bg-white p-6 rounded-xl shadow">
<h2 className="text-2xl font-semibold mb-4">
Add Task
</h2>
<form onSubmit={handleSubmit(submitForm)}>
<input
type="text"
placeholder="Enter Task"
className="border p-2 w-full mb-2"
{...register("taskname",{
required:true,
minLength:3
})}
/>
{
errors.taskname?.type==="required" &&
<p className="text-red-500 mb-2">
Task name required
</p>
}
{
errors.taskname?.type==="minLength" &&
<p className="text-red-500 mb-2">
Minimum 3 characters
</p>
}
<select
className="border p-2 w-full mb-2"
{...register("priority",{required:true})}
>
<option value="">
Select Priority
</option>
<option value="Low">
Low
</option>
<option value="Medium">
Medium
</option>
<option value="High">
High
</option>
</select>
{
errors.priority?.type==="required" &&
<p className="text-red-500 mb-2">
Priority required
</p>
}
<button
className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
type="submit"
>
Add Task
</button>
</form>
</div>
)
}
export default AddTask