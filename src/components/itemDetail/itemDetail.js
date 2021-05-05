import React from 'react'
import ItemCountContainer from '../../containers/itemCountContainer/itemCountContainer'
import {useParams} from 'react-router-dom'
import { objeto } from '../../containers/itemListContainer/itemListContainer'




export default function ItemDetail() {
    
    const { categoriesId } = useParams();

    let filtrado = objeto.filter((item) =>  item.id === parseInt(categoriesId));

    
    
    
    
    return (
        <div>
             <h1>{filtrado[0].description}</h1>
             <ItemCountContainer />
        </div>
    )
}
