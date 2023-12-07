import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import logo from "/src/assets/logo-libreria.jpeg"
import './NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <img className='logo' src={logo} alt="logo" />
      <ul className='nav-ul'>
        <li><Link to='/'>Librería "El Mundo"</Link></li>
        <li><Link to='/carrito'>Carrito</Link></li>
      </ul>
      <CartWidget/>
    </nav>
  )
}

export default NavBar