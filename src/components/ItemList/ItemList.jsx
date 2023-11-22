import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({libros}) => {
  return (
    <div className='productos-grid-container'>
        {libros.map(libro => <Item key={libro.id} {...libro}/>)}
    </div>
  )
}

export default ItemList