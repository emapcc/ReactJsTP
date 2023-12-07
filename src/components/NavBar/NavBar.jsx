import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import logo from "/src/assets/logo-libreria.jpeg"
import './NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'><img className='logo' src={logo} alt="logo" /></Link>
      <ul className='nav-ul'>
        <li><Link to='/'>Librería "El Mundo"</Link></li>
        <li><Link to='/genero/Novela'>Novelas</Link></li>
        <li><Link to='/genero/Poema épico'>Poemas épicos</Link></li>
        <li><Link to='/genero/Sátira'>Sátiras</Link></li>
        <li><Link to='/genero/Literatura fantástica'>Literatura fantástica</Link></li>
      </ul>
      <Link to='/carrito'><CartWidget/></Link>
    </nav>
  )
}

export default NavBar