import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {
    const {cart, precioTotal, removeItem, clearCart, decrementItem, incrementItem} = useContext(CartContext)

  if(cart.length === 0){
    return (
      <h1>No hay productos</h1>
    )
  } else {
    return (
      <>
        <ul className='cart-list'>
          <li>
            <p>Producto:</p>
            <p>Cantidad:</p>
            <p>Precio unitario:</p>
            <p>Precio:</p>
          </li>
  
            {cart.map((prod) => (
                <li key={prod.id}>
                  <p>{prod.titulo}</p>
                  <div>
                    <button onClick={() => decrementItem(prod.id)}>-</button>
                    <p>{prod.quantity}</p>
                    <button onClick={() => incrementItem(prod.id)}>+</button>
                  </div>
                  <p>{prod.precio}</p>
                  <p>{prod.quantity * prod.precio}</p>
                  <button onClick={() => removeItem(prod.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
        <button className='vaciar' onClick={clearCart}>Vaciar carrito</button>
        <div className='finalizar-compra'>
          <h4>Precio Total: ${precioTotal()}</h4>
          <Link className='finalizar' to="/checkout" >Finalizar compra</Link>
        </div>
      </>
    )
  }
}

export default Cart