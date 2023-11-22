import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { recuperarProductos } from '../../data/asyncLibros'
import BeatLoader from 'react-spinners/BeatLoader'

const ItemListContainer = ({title}) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    recuperarProductos()
      .then(response => {
        setProductos(response)
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
        <h1>{title}</h1>
        {loading ? <BeatLoader color="#403232" size={50} /> :
          <ItemList libros={productos} />
        }
    </>
  )
}

export default ItemListContainer