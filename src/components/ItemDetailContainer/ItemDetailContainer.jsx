import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { recuperarProductosPorId } from '../../data/asyncLibros'
import ItemDetail from '../ItemDetail/ItemDetail'
import BeatLoader from 'react-spinners/BeatLoader'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/Firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()
    
    useEffect(() => {
      const getLibros = async () => {
        const queryRef = doc(db, 'libros', itemId)
        const response = await getDoc(queryRef)
        const newLibr = {
          ...response.data(),
          id: response.id
        }
        setTimeout(() => {
          setLoading(false)
          setProduct(newLibr)
        }, 500)
      }
      getLibros()
    }, [itemId])

  return (
    <div>
      {loading ? <div className='loading'><BeatLoader color="#403232" size={50} /></div> :
        <ItemDetail {...product}/>
      }  
    </div>
  )
}

export default ItemDetailContainer