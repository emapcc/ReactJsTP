import React, { useContext, useState } from 'react'
import bag from "/src/assets/bag.svg"
import './CartWidget.css'
import CartContext from '../../context/CartContext'

const CartWidget = () => {
  const {cartQuantity} = useContext(CartContext)

  return (
    <div className='div-carrito'>
        <img src={bag} alt="icono carrito" />
        <p>{cartQuantity()}</p>
    </div>
  )
}

export default CartWidget