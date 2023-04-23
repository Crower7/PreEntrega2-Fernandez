import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({onAdd}) => {

    const [count, setCount] = useState(1)
    const decrement = () => {if (count > 0) {
        setCount(count - 1);
      }}
    const incrementar = ()=> setCount(prev => prev+1)

  return (
    <div>
        <button onClick={decrement}>-1</button>
        <span>{count}</span>
        <button onClick={incrementar}>+1</button>
        <br></br>
        <button onClick={()=> onAdd(count)}  className='shakeFix btnComprar'>Comprar</button>
    </div>
  )
}

export default ItemCount
