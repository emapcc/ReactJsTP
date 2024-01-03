import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { recuperarProductos, recuperarProductosGenero } from '../../data/asyncLibros'
import BeatLoader from 'react-spinners/BeatLoader'
import { useParams } from 'react-router-dom'
import { db } from "../../config/Firebase"
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = ({title}) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {generoId} = useParams()

  useEffect(() => {
    const getLibros = async () => {
      const queryRef = !generoId ? collection(db, 'libros') : 
      query(collection(db, 'libros'), where('genero', '==', generoId));

      const response = await getDocs(queryRef);

      const data = response.docs.map((libr) => {
        const newObj = {
          ...libr.data(),
          id: libr.id
        }
        return newObj
      })
      setProductos(data)
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    }
    getLibros()
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