import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Item({item}) {

    const history = useHistory()

    function handleClick(){

        history.push(`/categories/${item.id}`)
        

    }
    
   
    return (
        <div>
            <h3 onClick={handleClick}>{item.title}</h3>
        </div>
            
        
    )
}
