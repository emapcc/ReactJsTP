import React, { useRef } from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, titulo, autor, anio, img}) => {

  return (
    <article>
      <img src={img} alt={titulo} />
      <h3>{titulo}</h3>
      <p>Autor/a: {autor}</p>
      <button><Link to={`/producto/${id}`} >Ver más</Link></button>
    </article>
  )
}

export default Item