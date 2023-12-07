import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { recuperarProductosPorId } from '../../data/asyncLibros'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {itemId} = useParams()
    
    useEffect(() => {
        recuperarProductosPorId(itemId)
        .then((prod) => setProduct(prod))
    }, [itemId])

  return (
    <div>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer