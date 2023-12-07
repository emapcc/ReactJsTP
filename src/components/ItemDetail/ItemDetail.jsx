import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({titulo, autor, anio, precio, img, stock}) => {
  return (
    <div className='mas-info'>
        <img src={img} alt={titulo} />
        <ItemCount inicial={1} stock={stock} />
        <h3>{titulo}</h3>
    </div>
  )
}

export default ItemDetail