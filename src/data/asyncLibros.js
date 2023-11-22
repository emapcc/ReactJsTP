const libros = [
    {
        id: 1,
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        anio: 1813,
        precio: 2000,
        img: "https://images.cdn3.buscalibre.com/fit-in/360x360/46/6b/466b0b47e932561b186c56358acbe55e.jpg"
    },
    {
        id: 2,
        titulo: "La Divina Comedia",
        autor: "Dante Alighieri",
        anio: 1472,
        precio: 40000,
        img: "https://images.cdn2.buscalibre.com/fit-in/360x360/01/e0/01e04c600c7b7bfaf5a14c17a640e5af.jpg"
    },
    {
        id: 3,
        titulo: "Cumbres Borrascosas",
        autor: "Emily Brontë",
        anio: 1847,
        precio: 10449,
        img: "https://images.cdn3.buscalibre.com/fit-in/360x360/b8/70/b870376a2d509e8a0f5209fbb66be9c4.jpg"
    },
    {
        id: 4,
        titulo: "La Divina Comedia",
        autor: "Dante Alighieri",
        anio: 1472,
        precio: 40000,
        img: "https://images.cdn2.buscalibre.com/fit-in/360x360/01/e0/01e04c600c7b7bfaf5a14c17a640e5af.jpg"
    }
]

export const recuperarProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(libros)
        }, 2500)
    })
  }