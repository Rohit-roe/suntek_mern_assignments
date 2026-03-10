import CountryCard from "./CountryCard"
function CountryList({countries}) {
return(
<div className="max-w-6xl mx-auto mt-8 px-6">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{
countries.map((country,index)=>(
<CountryCard
key={index}
country={country}
/>
))
}
</div>
</div>
)
}
export default CountryList