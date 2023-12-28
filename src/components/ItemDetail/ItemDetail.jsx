import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import CartContext from '../../context/CartContext'

const ItemDetail = ({id, titulo, autor, anio, precio, img, stock}) => {
  const [quantity, setQuantity] = useState(0)
  const {addItem} = useContext(CartContext)

  const onAdd = (quantity) => {
    setQuantity(quantity)
    const newProd = {
      id, titulo, precio
    }
    addItem(newProd, quantity)

  }

  return (
    <div className='mas-info'>
      <div>
        <img src={img} alt={titulo} />
        <p>Precio: ${precio}</p>
        <ItemCount inicial={1} stock={stock} onAdd={onAdd}/>
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