import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./categorie.css"
import { useNavigate } from 'react-router-dom';

const Insertcategorie = () => {
const navigate=useNavigate()
const[categorie,setCategorie]=useState({})
const handleSubmit = async(event) => {
event.preventDefault();
//faire le add dans la BD
await
axios.post("https://atelier5-oaxs.vercel.app/api/api/categories",categorie)
.then(res => {
navigate("/categories")
})
.catch(error=>{
alert("Erreur ! Insertion non effectuée")
})
};

return (
<div className="form-container">

<form className="categorie-form">
<h2>Ajouter Catégorie</h2>

<div className="form-group">
<label htmlFor="Nom">Nom catégorie</label>
<input
type="text"
id="reference"
value={categorie.nomcategorie}
onChange={(e) =>

setCategorie({...categorie,nomcategorie:e.target.value})}

className="form-input"
placeholder="Entrez nom catégorie"
/>
</div>
<div className="form-group">
<label htmlFor="image">Image</label>
<input
type="text"
required
id="imagecategorie"
value={categorie.imagecategorie}
onChange={(e) =>

setCategorie({...categorie,imagecategorie:e.target.value})}

className="form-input"
placeholder="Image"
/>
{categorie.imagecategorie? <img src={categorie.imagecategorie}

alt="image" width="70"/>:null}

</div>

<button type="button" className="form-submit-button"
onClick={(e)=>handleSubmit(e)}>Enregistrer</button>

</form>
</div>
)

}
export default Insertcategorie