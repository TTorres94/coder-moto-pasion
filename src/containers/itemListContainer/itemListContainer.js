import React, {useState, useEffect} from 'react';
import './itemListContainer.css'
import ItemList from '../../components/itemList/itemList'


export let objeto = [
    {
        id:1, 
        title: 'Ninja 1000',
        description:'Moto Ninja con 1000 Centimetros cúbicos. Puede alcanzar velocidades de hasta 320 km/h',
        price:2000,
        pictureUrl:'https://www.moto1pro.com/sites/default/files/kawasaki_z1000sx_2017.jpg'
    },
    {
        id:2, 
        title: 'Ninja 400',
        description:'Moto ninja con 400 centímetros cúbicos. Puede alcanzar velocidades de hasta 250km/h',
        price:10000,
        pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_914669-MLA28154221242_092018-O.webp'
    },
    {
        id:54, 
        title: 'Mt03',
        description:'Moto Yamaha de 200CC. Puede alcanzar los 180km/h.',
        price:5000,
        pictureUrl:'https://www.arpem.com/imagenes/big/1/6/1/8/rueda-trasera.2011618.jpg'
    }
]

export default function ItemListContainer (props){

    const [item, setItem] = useState([]);

    useEffect(() => {
    
        setTimeout(function(){ promesaEjercicio
            .then((response) => setItem(response)) },
             2000)
     })
    
     

    

    

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

