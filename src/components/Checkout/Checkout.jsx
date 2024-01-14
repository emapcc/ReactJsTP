import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../config/Firebase'
import Swal from 'sweetalert2'
import "./Checkout.css"

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
        if((user.email.length === 0) || (user.repetirEmail.length === 0)){
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
                title: 'Ingrese el mail'
            })
        } else if(user.nombre.length <= 2){
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
                title: 'Ingrese un nombre válido'
            })
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
        } else {
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
        }
    }

    const validateEmail = () => {
        setEmailMatch(user.email === user.repetirEmail);
    }

    const validateNumber = () => {
        setValidNumber(user.telefono.length > 9 && user.telefono > 0)
    }

    useEffect(() => {
        validateEmail();
    }, [user.email, user.repetirEmail]);

    useEffect(() => {
        validateNumber();
    }, [user.telefono]);

  return (
    <>
        <h2>Resumen de compra:</h2>
        {cart.map((prod) => (
            <li key={prod.id}>{prod.titulo} x{prod.quantity} --{prod.quantity * prod.precio}</li>
        ))}
        <p>Total: ${precioTotal()}</p>

        <form onSubmit={getOrder}>
            <div>
                <label>Nombre:</label>
                <input type="text" placeholder='Nombre' name="nombre" onChange={updateUser} />
            </div>
            <div>
                <label>Teléfono:</label>
                <input type="number" placeholder='2364578578' name="telefono" onChange={updateUser} />
            </div>
            <div>
                <label>Mail:</label>
                <input type="email" placeholder='abc@gmail.com' name="email" onChange={updateUser} />
            </div>
            <div>
                <label>Repertir mail:</label>
                <input type="email" placeholder='abc@gmail.com' name="repetirEmail" onChange={updateUser} />
            </div>
            <button>Comprar</button>
        </form>
    </>
  )
}

export default Checkout