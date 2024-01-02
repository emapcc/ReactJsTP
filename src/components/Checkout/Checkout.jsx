import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../config/Firebase'

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
        if(cart.length > 0 && emailMatch){
            const order = {
                buyer: user,
                items: cart,
                total: precioTotal()
            }
            const ordersCollection = collection(db, 'orders')
            addDoc(ordersCollection, order)
                .then(({id}) => console.log(`Se agregó la orden con id: ${id}`))
            console.log(order);
            clearCart()
        } else if(!emailMatch){
            console.log('Los mails no coinciden');
        } else if(cart.length === 0){
            console.log('Agregue productos al carrito');
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