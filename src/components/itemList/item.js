import React from 'react'






export default function Item({item}) {

     
    function showDetail (){
        console.log(item.title)

        return(
            <div>
                <img src="#" alt=''></img>
                <h3>{item.title}</h3>
                <h5>{item.description}</h5>
                <h5>{item.price}</h5>
            </div>
        )
    }
   


    return (
        <div>
            <h3 onClick={showDetail}>{item.title}</h3>
        </div>
            
        
    )
}
