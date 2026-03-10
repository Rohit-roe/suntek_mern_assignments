function CountryCard({country}) {

return(

<div className="bg-white rounded-xl shadow hover:shadow-lg transition">

<img
src={country?.flags?.png}
alt="flag"
className="w-full h-40 object-cover rounded-t-xl"
/>

<div className="p-4">

<h2 className="text-lg font-semibold">
{country?.name?.common}
</h2>

<p className="text-sm text-gray-600">
Capital :
{country?.capital?.[0] || "N/A"}
</p>

<p className="text-sm text-gray-600">
Population :
{country?.population || "N/A"}
</p>

<p className="text-sm text-gray-600">
Region :
{country?.region || "N/A"}
</p>

</div>

</div>

)

}

export default CountryCard