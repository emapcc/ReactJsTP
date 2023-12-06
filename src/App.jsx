import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/catalogo' element={<ItemListContainer title="Librería El Mundo"/>} />
          <Route path='/carrito' element={<h1>Carrito</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
