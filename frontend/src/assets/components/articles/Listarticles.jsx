import React, { useEffect, useState } from 'react'
import {fetcharticlesPagination} from "../../services/articleservice"
import "./article.css"
import Affichearticle from './Affichearticle';
const Listarticles = () => {

const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(0);
const [articles, setArticles] = useState([]);
const [limit, setLimit]=useState(5)

const fetchProducts = async (page,limit) => {
try {
const res = await fetcharticlesPagination(page,limit)
setArticles(res.data.products);
setTotalPages(res.data.totalPages);

} catch (error) {
console.log(error);
}
};
useEffect(() => {

fetchProducts(currentPage,limit);


}, [currentPage,limit]);
return (
<div>
<Affichearticle articles={articles}/>
</div>

)
}
export default Listarticles