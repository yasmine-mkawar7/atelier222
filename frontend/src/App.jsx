import React from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.css";

import Editarticle from './assets/components/articles/Editarticle';
import Insertarticle from './assets/components/articles/Insertarticle';
import Listarticles from './assets/components/articles/Listarticles';
import Editcategorie from './assets/components/categories/Editcategorie';
import Insertcategorie from './assets/components/categories/Insertcategorie';
import Listcategories from './assets/components/categories/Listcategories';
import Editscategorie from './assets/components/scategories/Editscategorie';
import Insertscategorie from './assets/components/scategories/Insertscategorie';
import Listscategories from './assets/components/scategories/Listscategories';
import Viewarticle from './assets/components/articles/Viewarticle';
import Viewcategorie from './assets/components/categories/Viewcategorie';
import Viewscategorie from './assets/components/scategories/Viewscategorie';
import Menu from './assets/components/menu/Menu';
import Liste from '/Liste';
const App=() =>{
return (
<div>
<Router>
  <Menu></Menu>
<Routes>
<Route path="/articles" element={<Listarticles/>}/>
<Route path="/articles/add" element={<Insertarticle/>}/>
<Route path="/article/edit/:id" element={<Editarticle/>}/>
<Route path="/article/view/:id" element={<Viewarticle/>}/>
<Route path="/categories" element={<Listcategories/>}/>
<Route path="/categories/add" element={<Insertcategorie/>}/>
<Route path="/categories/edit/:id" element={<Editcategorie/>}/>
<Route path="/categories/view/:id" element={<Viewcategorie/>}/>
<Route path="/scategories" element={<Listscategories/>}/>
<Route path="/scategories/add" element={<Insertscategorie/>}/>
<Route path="/scategories/edit/:id" element={<Editscategorie/>}/>
<Route path="/scategories/view/:id" element={<Viewscategorie/>}/>
</Routes><Route path="/liste" element={<Liste/>}/>
</Router>
</div>
);
}
export default App;