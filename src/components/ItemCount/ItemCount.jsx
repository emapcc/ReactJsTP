import React from 'react'
import useCounter from '../../hooks/useCounter'

const ItemCount = ({inicial, stock}) => {
    const {count, incrementar, decrementar} = useCounter(inicial, stock)

  return (
    <div>
      <button onClick={decrementar}>-</button>
      <p>{count}</p>
      <button onClick={incrementar}>+</button>
    </div>
  )
}

export default ItemCount