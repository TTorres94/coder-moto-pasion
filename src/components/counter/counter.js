import React from 'react';
import './counter.css'



export default function Counter({incrementar, decrementar, number, onAdd}) {
    return (
      <div>
        
        <div className='counter__buttons'>
          <button onClick={decrementar}>-</button>
          <h1>{number}</h1>
          <button onClick={incrementar}>+</button>
        </div>
        <div>
          <button onClick={onAdd}>Agregar al carrito</button>
        </div>
        
      </div>
    );
    //el onClick={} va con CORCHETES para que se le pueda pasar código JS.
  }
  