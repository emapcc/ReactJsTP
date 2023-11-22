import React, { useRef } from 'react'
import './Item.css'

const Item = ({id, titulo, autor, anio, precio, img}) => {
    const infoRef = useRef()

    const abrirInfo = () => {
        infoRef.current.style.display = 'block'
    }

    const cerrarInfo = () => {
        infoRef.current.style.display = 'none'
    }

  return (
    <>
        <article>
            <img src={img} alt={titulo} />
            <h3>{titulo}</h3>
            <p>Autor/a: {autor}</p>
            <button onClick={abrirInfo}>Ver más</button>
        </article>

        <div ref={infoRef} className='mas-info'>
            <div className='info-container'>
                <img src={img} alt={titulo} />
                <h3>{titulo}</h3>
                <button onClick={cerrarInfo}>Cerrar</button>
            </div>
        </div>
    </>
  )
}

export default Item