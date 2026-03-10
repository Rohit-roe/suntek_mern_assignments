import TaskManager from "./components/TaskManager"
function App() {
return (
<div className="min-h-screen bg-gray-100">
<h1 className="text-4xl font-bold text-center pt-8 pb-4">
Tasks List
</h1>
<TaskManager/>
</div>
)
}
export default App