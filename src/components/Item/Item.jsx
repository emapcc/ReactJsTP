import React from 'react'
import './Item.css'

const Item = ({id, titulo, autor, anio, precio, img}) => {
  return (
    <article>
        <img src={img} alt={titulo} />
        <h3>{titulo}</h3>
        <p>Autor/a: {autor}</p>
        <button>Ver más</button>
    </article>
  )
}

export default Item