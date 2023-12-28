import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../context/CartContext'

const Checkout = () => {
    const [user, setUser] = useState({
        nombre: ``,
        telefono: ``,
        email: ``,
        repetirEmail: ``
    })
    const [emailMatch, setEmailMatch] = useState(null)
    const {cart, clearCart, precioTotal} = useContext(CartContext)

    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value,
        }))
    }

    const getOrder = (event) => {
        event.preventDefault();
        if(cart.length > 0){
            if(emailMatch){
                const order = {
                    buyer: user,
                    items: cart,
                    total: precioTotal()
                }
                console.log(order);
            }
            clearCart()
        }
    }

    const validateEmail = () => {
        setEmailMatch(user.email === user.repetirEmail);
    }

    useEffect(() => {
        validateEmail();
    }, [user.email, user.repetirEmail]);

  return (
    <>
        <h2>Resumen de compra:</h2>
        <span>${precioTotal()}</span>

        <form onSubmit={getOrder}>
            <label>Nombre: <input required type="text" placeholder='Nombre' name="nombre" onChange={updateUser} /></label>
            <label>Teléfono: <input required type="number" placeholder='2364578578' name="telefono" onChange={updateUser} /></label>
            <label>Mail: <input required type="email" placeholder='hola@gmail.com' name="email" onChange={updateUser} /></label>
            <label>Repertir mail: <input required type="email" placeholder='hola@gmail.com' name="repetirEmail" onChange={updateUser} /></label>
            <button>Comprar</button>
        </form>
    </>
  )
}

export default Checkout