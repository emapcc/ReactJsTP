import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'

const Cart = () => {
    const {cart, precioTotal, removeItem, clearCart} = useContext(CartContext)

  return (
    <>
      <ul className='cart-list'>
        <li>Producto:</li>
        <li>Cantidad:</li>
        <li>Precio unitario:</li>
        <li>Precio:</li>

          {cart.map((prod) => (
            <>
              <li>{prod.titulo}</li>
              <li>{prod.quantity}</li>
              <li>{prod.precio}</li>
              <li>{prod.quantity * prod.precio}</li>
              <li><button onClick={() => removeItem(prod.id)}>Eliminar</button></li>
            </>
          ))}
      </ul>
      <h4>Precio Total: ${precioTotal()}</h4>
      <button onClick={clearCart}>Vaciar carrito</button>
    </>
  )
}

export default Cart