const libros = [
    {
        id: 1,
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        anio: 1813,
        genero: "a",
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
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes Saavedra",
        anio: 1615,
        precio: 10000,
        img: "https://images.cdn1.buscalibre.com/fit-in/360x360/a6/18/a618be10eae5c2a608ec6e22e6917e29.jpg"
    },
    {
        id: 5,
        titulo: "Madame Bovary",
        autor: "Gustave Flaubert",
        anio: 1857,
        precio: 13500,
        img: "https://contentv2.tap-commerce.com/cover/original/9789875809840_1.jpg?id_com=1169"
    },
    {
        id: 6,
        titulo: "El Viejo y el Mar",
        autor: "Ernest Hemingway",
        anio: 1952,
        precio: 5700,
        img: "https://contentv2.tap-commerce.com/cover/large/9789871138630_1.jpg?id_com=1156"
    },
    {
        id: 7,
        titulo: "La metamorfosis",
        autor: "Franz Kafka",
        anio: 1915,
        genero: "a",
        precio: 10300,
        img: "https://http2.mlstatic.com/D_NQ_NP_827193-MLA51376065356_092022-O.webp"
    },
    {
        id: 8,
        titulo: "La vida invisible de Addie LaRue",
        autor: "V. E. Schwab",
        anio: 2020,
        genero: "a",
        precio: 13400,
        img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/681785.jpg"
    }
]

export const recuperarProductos = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(libros)
            }, 2500)
        })
    }