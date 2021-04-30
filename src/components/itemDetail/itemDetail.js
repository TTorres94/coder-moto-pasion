import React, {useState, useEffect} from 'react'   
import {useParams} from 'react-router-dom'

const { promesaEjercicio } = require('../../containers/itemListContainer/itemListContainer')

export default function ItemDetail() {
    
    const { categoriesId } = useParams();
    const {setItems, Items} = useState({id:'', 
        title: '',
        description:'',
        price:''});

    useEffect(() => {
        
    })
    
    
    return (
        <div>
             {categoriesId}
        </div>
    )
}
