import React, { createContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const inCart = (id) => {
      return cart.some((libr) => libr.id === id)
    }

    const addItem = (item, quantity) => {
        const newProd = {
            ...item,
            quantity
        }

        if(inCart(newProd.id)){
          const updateCart = cart.map((libr) => {
            if(libr.id === newProd.id){
              libr.quantity += newProd.quantity
            }
            return libr
          })
          setCart(updateCart)

        } else {
          setCart([...cart, newProd])
        }
    }

    const precioTotal = () => {
      const total = cart.reduce((t, item) => t + item.precio * item.quantity, 0)
      return total
    }

    const removeItem = (id) => {
      const item = cart.filter((libr) => libr.id !== id)
      setCart([...item])
    }

    const clearCart = () => {
      setCart([])
    }

    const cartQuantity = () => {
      let quantity = 0
      cart.forEach((libr) => {
        quantity += libr.quantity
      })
      return quantity
    }

    const decrementItem = (itemId) => {
      const updateCart = cart.map((libr) => {
        if(libr.id === itemId){
          const newQuantity = Math.max(libr.quantity - 1, 1)
          return {...libr, quantity: newQuantity}
        }
        return libr
      })
      setCart(updateCart)
    }

    const incrementItem = (itemId) => {
      const updateCart = cart.map((libr) => {
        if(libr.id === itemId){
          const newQuantity = Math.min(libr.quantity + 1, libr.stock)
          return {...libr, quantity: newQuantity}
        }
        return libr
      })
      setCart(updateCart)
    }

  return (
    <CartContext.Provider value={{cart, setCart, addItem, precioTotal, removeItem, clearCart, cartQuantity, decrementItem, incrementItem}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext