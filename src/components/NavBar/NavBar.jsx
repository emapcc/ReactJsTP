import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import logo from "/src/assets/logo-libreria.jpeg"
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <img className='logo' src={logo} alt="logo" />
      <ul className='nav-ul'>
        <li>Librería "El Mundo"</li>
        <li>Sobre nosotros</li>
        <li>Catálogo</li>
      </ul>
      <CartWidget/>
    </nav>
  )
}

export default NavBar