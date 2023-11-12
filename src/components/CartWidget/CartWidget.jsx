import React, { useState } from 'react'
import bag from "/src/assets/bag.svg"
import './CartWidget.css'

const CartWidget = () => {
  const [cantCarrito, setCantCarrito] = useState(0)
  return (
    <div className='div-carrito'>
        <img src={bag} alt="icono carrito" />
        <p>{cantCarrito}</p>
    </div>
  )
}

export default CartWidget