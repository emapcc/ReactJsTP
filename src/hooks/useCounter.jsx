import React, { useState } from 'react'

const useCounter = (valorInicial, stock) => {
    const [count, setCount] = useState(valorInicial)

    const incrementar = () => {
        count < stock && setCount(count + 1)
    }

    const decrementar = () => {
        count > valorInicial && setCount(count - 1)
    }

  return {count, incrementar, decrementar}
}

export default useCounter