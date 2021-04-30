import React from 'react';
import './itemList.css'
import Item from './item'


export default function ItemList({item}) {

    
    


    return (

        
        <div className='itemList'>
            
                {
                    
                    item.map((element) => {
                    return(<Item key= {element.id} item={element} />)
                    })
                }
        
        </div>
    )
}
