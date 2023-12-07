import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { recuperarProductos, recuperarProductosGenero } from '../../data/asyncLibros'
import BeatLoader from 'react-spinners/BeatLoader'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({title}) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const {generoId} = useParams()
  console.log(generoId);
  console.log(recuperarProductosGenero(generoId));

  useEffect(() => {
    if(generoId) {
      recuperarProductosGenero(generoId)
        .then(response => setProductos(response))
        .catch(error => {
          console.error(error);
        })
        .finally(() => setLoading(false))
    } else {
      recuperarProductos()
        .then(response => setProductos(response))
        .catch(error => {
          console.error(error);
        })
        .finally(() => setLoading(false))
    }
  }, [generoId])

  return (
    <>
        <h1>{title}</h1>
        {loading ? <div className='loading'><BeatLoader color="#403232" size={50} /></div> :
          <ItemList libros={productos} />
        }
    </>
  )
}

export default ItemListContainer