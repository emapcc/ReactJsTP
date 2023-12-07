import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer title="Librería El Mundo"/>} />
          <Route path='/genero/:generoId' element={<ItemListContainer title="Productos por género"/>} />
          <Route path='/producto/:itemId' element={<ItemDetailContainer/>} />
          <Route path='/carrito' element={<h1>Carrito</h1>} />
          <Route path='*' element={<h1>Error 404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
