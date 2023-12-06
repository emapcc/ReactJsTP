import React from 'react'
import useCounter from '../../hooks/useCounter'

const ItemCount = ({valorInicial, stock}) => {
    const {count, incrementar, decrementar} = useCounter(valorInicial, stock)

  return (
    <div>
      <button onClick={decrementar}>-</button>
      <p>{count}</p>
      <button onClick={incrementar}>+</button>
    </div>
  )
}

export default ItemCount