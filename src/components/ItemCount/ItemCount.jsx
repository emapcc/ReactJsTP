import React from 'react'
import useCounter from '../../hooks/useCounter'
import './ItemCount.css'

const ItemCount = ({inicial, stock}) => {
    const {count, incrementar, decrementar} = useCounter(inicial, stock)

  return (
    <div className='count'>
      <button onClick={decrementar}>-</button>
      <p>{count}</p>
      <button onClick={incrementar}>+</button>
    </div>
  )
}

export default ItemCount