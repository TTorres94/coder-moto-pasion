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
            title: 'Ninja 1000',
            description:'hola',
            price:1000,
            pictureUrl:''
        },
        {
            id:2, 
            title: 'Ninja 400',
            description:'hola',
            price:1000,
            pictureUrl:'probando'
        },
        {
            id:54, 
            title: 'Mt03',
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