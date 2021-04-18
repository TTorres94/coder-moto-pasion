import React, {useState} from 'react';
import './itemCountContainer.css'
import Counter from'../../components/counter/counter'


export default function ItemCount(props){

    const [initialNumber, setNumber] = useState (1);
    const stock = 5;
    

   


    function increment() {
        if(initialNumber < stock){
            setNumber(initialNumber + 1) 
        }
        
    }

    function decrement () {
        if(initialNumber >= 2){
            setNumber(initialNumber - 1)
        }else{
            
        }
    }

    function onAdd(){
        console.log(initialNumber)

        
    }


    return(
        <div className='counterContainer'>
            <Counter incrementar={increment} decrementar={decrement} number={initialNumber} onAdd={onAdd} />
        </div>
    )

}