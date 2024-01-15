import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import CartContext from '../../context/CartContext'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, titulo, autor, anio, precio, img, stock}) => {
  const [quantity, setQuantity] = useState(0)
  const {addItem} = useContext(CartContext)

  const onAdd = (quantity) => {
    setQuantity(quantity)
    const newProd = {
      id, titulo, precio, stock
    }
    addItem(newProd, quantity)
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Producto agregado",
      text: `${quantity} x ${titulo}-- $${precio * quantity}`,
    });
    
  }

  return (
    <div className='mas-info'>
      <div>
        <img src={img} alt={titulo} />
        <p className='precio'>Precio: ${precio}</p>
        {quantity > 0 ? <Link to='/carrito'>Ir al carrito</Link>:
        <ItemCount inicial={1} stock={stock} onAdd={onAdd}/>}
      </div>
      <div>
        <h3>{titulo}</h3>
        <h4>Autor: {autor}</h4>
        <p>Año de publicación: {anio}</p>
        <p>Stock: {stock}</p>
      </div>
    </div>
  )
}

export default ItemDetail