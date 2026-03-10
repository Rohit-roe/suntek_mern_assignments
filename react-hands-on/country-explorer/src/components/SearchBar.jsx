import { useEffect, useRef } from "react"
function SearchBar({onSearch}) {
const inputRef = useRef(null)
const timerRef = useRef(null)
useEffect(()=>{
inputRef.current.focus()},[])
const handleChange = (e)=>{
clearTimeout(timerRef.current)
timerRef.current = setTimeout(()=>{onSearch(e.target.value)},500)
}
return(
<div className="flex justify-center mt-6">
<input ref={inputRef} type="text" placeholder="Search Country..." onChange={handleChange} className="border p-3 w-80 rounded-lg shadow"/>
</div>
)
}
export default SearchBar