import React from 'react'
import { useHistory } from 'react-router-dom'
import './item.css'

export default function Item({item}) {

    const history = useHistory()

    function handleClick(){

        history.push(`/categories/${item.id}`)
        

    }
    
   
    return (
        <div className='item'>
            <h3 onClick={handleClick}>{item.title}</h3>
            <img src={item.pictureUrl}  alt='' />
        </div>
            
        
    )
}
