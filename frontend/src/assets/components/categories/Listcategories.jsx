import axios from 'axios';
import React, { useEffect, useState } from 'react'
const Listcategories = () => {
const[categories,setCategories]=useState([]);
const getcategories=async()=>{
await axios.get("https://atelier5-oaxs.vercel.app/api/api/categories")
.then(res=>{
setCategories(res.data)
}
)
.catch(error=>{
console.log(error)
})
}
useEffect(() => {
getcategories()
},[])
return (
<div>
<h2>Liste des catégories </h2>
<table className='table table table-striped'>
<thead>
<tr>
<td>Nom catégorie</td>

11
<td>Image categorie</td>
<td>Update</td>
<td>Delete</td>
</tr>
</thead>
<tbody>
{ categories &&
categories.map((cat,index) =>
<tr key={index}>
<td>{cat.nomcategorie}</td>
<td><img src={cat.imagecategorie} width={100} height={100}/></td>
<td><button className='btn btn-warning btn-sm'>Update</button></td>
<td><button className='btn btn-danger btn-sm'>Delete</button></td>

</tr>

)
}
</tbody>

</table>
</div>
)
}
export default Listcategories