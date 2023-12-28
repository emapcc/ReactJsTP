import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer title="Librería El Mundo"/>} />
            <Route path='/genero/:generoId' element={<ItemListContainer title="Productos por género"/>} />
            <Route path='/producto/:itemId' element={<ItemDetailContainer/>} />
            <Route path='/carrito' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='*' element={<h1>Error 404</h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
