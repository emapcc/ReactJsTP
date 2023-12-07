import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({titulo, autor, anio, precio, img, stock}) => {
  return (
    <div className='mas-info'>
      <div>
        <img src={img} alt={titulo} />
        <p>Precio: ${precio}</p>
        <ItemCount inicial={1} stock={stock} />
        <button className='agregar-carrito'>Agregar al carrito</button>
      </div>
      <div>
        <h3>{titulo}</h3>
        <h4>Autor: {autor}</h4>
        <p>Año de publicación: {anio}</p>
        <p>Detalle: -</p>
      </div>
    </div>
  )
}

export default ItemDetail