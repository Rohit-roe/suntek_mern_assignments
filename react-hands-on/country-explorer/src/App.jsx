import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";
function App() {
const [countries,setCountries] = useState([])
const [loading,setLoading] = useState(true)
const [error,setError] = useState(null)
const [query,setQuery] = useState("")
useEffect(()=>{
fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags")
.then(res=>res.json())
.then(data=>{
setCountries(data)
setLoading(false)
})
.catch(err=>{
setError("Failed to fetch countries")
setLoading(false)
})
},[])
const filteredCountries = countries.filter(country=>
country.name.common
.toLowerCase()
.includes(query.toLowerCase())
)
return (
<div className="min-h-screen bg-gray-100">
<h1 className="text-4xl font-bold text-center pt-6">
Country Explorer 🌍
</h1>
<SearchBar onSearch={setQuery}/>
{
loading &&
<p className="text-center text-xl mt-10">
Loading Countries...
</p>
}
{
error &&
<p className="text-center text-red-500 mt-10">
{error}
</p>
}
{
!loading && !error &&
<CountryList countries={filteredCountries}/>
}
</div>
)
}
export default App