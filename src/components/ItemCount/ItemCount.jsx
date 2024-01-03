import React from 'react'
import useCounter from '../../hooks/useCounter'
import './ItemCount.css'

const ItemCount = ({inicial, stock, onAdd}) => {
    const {count, incrementar, decrementar} = useCounter(inicial, stock)

  return (
    <>
    <div className='count'>
      <button onClick={decrementar}>-</button>
      <p>{count}</p>
      <button onClick={incrementar}>+</button>
    </div>
    <button onClick={() => onAdd(count)} className='agregar-carrito'>Agregar al carrito</button>
    </>
  )
}

export default ItemCount