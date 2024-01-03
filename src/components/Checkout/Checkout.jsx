import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../config/Firebase'
import Swal from 'sweetalert2'

const Checkout = () => {
    const [user, setUser] = useState({
        nombre: ``,
        telefono: ``,
        email: ``,
        repetirEmail: ``
    })
    const [emailMatch, setEmailMatch] = useState(null)
    const [validNumber, setValidNumber] = useState(null)
    const {cart, clearCart, precioTotal} = useContext(CartContext)

    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value,
        }))
    }

    const getOrder = (event) => {
        event.preventDefault();
        if(cart.length > 0 && emailMatch && validNumber){
            const order = {
                buyer: user,
                items: cart,
                total: precioTotal()
            }
            const ordersCollection = collection(db, 'orders')
            addDoc(ordersCollection, order)
                .then(({id}) => {
                    Swal.fire({
                        title: "Compra realizada",
                        text: `Su id de compra es #${id}`,
                        icon: "success"
                    });
                })
            clearCart()
        } else if(!emailMatch){
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-start',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            
            Toast.fire({
                icon: 'error',
                title: 'Los mails no coinciden'
            })
        } else if(cart.length === 0){
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-start',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            
            Toast.fire({
                icon: 'warning',
                title: 'Debes agregar productos al carrito'
            })
        } else if(!validNumber){
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-start',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            
            Toast.fire({
                icon: 'error',
                title: 'Número de teléfono inválido'
            })
        }
    }

    const validateEmail = () => {
        setEmailMatch(user.email === user.repetirEmail);
    }

    useEffect(() => {
        validateEmail();
    }, [user.email, user.repetirEmail]);

    const validateNumber = () => {
        setValidNumber(user.telefono.length > 9 && user.telefono > 0)
    }

    useEffect(() => {
        validateNumber();
    }, [user.telefono]);

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