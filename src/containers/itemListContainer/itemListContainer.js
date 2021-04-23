import React, {useState, useEffect} from 'react';
import './itemListContainer.css'
import ItemList from '../../components/itemList/itemList'

export default function ItemListContainer (props){

    const [item, setItem] = useState([]);

    useEffect(() => {
    
        setTimeout(function(){ promesaEjercicio
            .then((response) => setItem(response)) },
             2000)
     })
    
     

    let objeto = [
        {
            id:1, 
            title: 'Item 1',
            description:'hola',
            price:1000,
            pictureUrl:'probando'
        },
        {
            id:2, 
            title: 'Item 2',
            description:'hola',
            price:1000,
            pictureUrl:'probando'
        },
        {
            id:3, 
            title: 'Item 3',
            description:'hola',
            price:1000,
            pictureUrl:'probando'
        }
    ]

    

    var promesaEjercicio = new Promise((resolve, reject) => {

        resolve(objeto)
        
    })

    

    

    return(
    <div className='itemListContainer'>
        <h1>Bienvenido a tu nueva moto!</h1>
        <ItemList item = {item}/>
    </div>
    )  
    

}