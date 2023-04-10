const products = [
    {
    id: '1',
    name: 'remera',
    precio: 1800,
    img: <img src ='https://universoventura.vteximg.com.br/arquivos/ids/193028-600-600/Remera-Manga-Corta-DC-Shoes-Round-We-Go-Urbano-Hombre-Negro-1222102104.jpg?v=637789732032600000'></img>,
    stock:120,
    description: 'algodon peinado',
    category: 'remera',
    stock: 25,
    },

    {
    id: '2',
    name: 'remera',
    precio: 1800,
    img: <img src ='https://universoventura.vteximg.com.br/arquivos/ids/193028-600-600/Remera-Manga-Corta-DC-Shoes-Round-We-Go-Urbano-Hombre-Negro-1222102104.jpg?v=637789732032600000'></img>,
    stock:120,
    description: 'algodon peinado',
    category: 'remera',
    stock: 25,
    },

    {
    id: '3',
    name: 'remera',
    precio: 1800,
    img: <img src ='https://universoventura.vteximg.com.br/arquivos/ids/193028-600-600/Remera-Manga-Corta-DC-Shoes-Round-We-Go-Urbano-Hombre-Negro-1222102104.jpg?v=637789732032600000'></img>,
    stock:120,
    description: 'algodon peinado',
    category: 'remera',
    stock: 25,
    },

    {
    id: '4',
    name: 'remera',
    precio: 1800,
    img: <img src ='https://universoventura.vteximg.com.br/arquivos/ids/193028-600-600/Remera-Manga-Corta-DC-Shoes-Round-We-Go-Urbano-Hombre-Negro-1222102104.jpg?v=637789732032600000'></img>,
    stock:120,
    description: 'algodon peinado',
    category: 'remera',
    stock: 25,
    },

    {
    id: '1',
    name: 'remera',
    precio: 1800,
    img: <img src ='https://universoventura.vteximg.com.br/arquivos/ids/193028-600-600/Remera-Manga-Corta-DC-Shoes-Round-We-Go-Urbano-Hombre-Negro-1222102104.jpg?v=637789732032600000'></img>,
    stock:120,
    description: 'algodon peinado',
    category: 'remera',
    stock: 25,
    },



    {
    id: '2',
    name: 'pantalon',
    precio: 2800,
    img: <img src="https://http2.mlstatic.com/D_NQ_NP_628920-MLA41614479917_052020-O.jpg"></img>,
    stock:130,
    description: 'algodon peinado',
    category: 'pantalon',
    stock: 25,
    },

    {
    id: '3',
    name: 'campera',
    precio: 4000,
    img: <img src ='https://tienda.clubtalleres.com.ar/wp-content/uploads/2022/03/Campera-Talleres-Laureano-MR.jpeg'></img>,
    stock:120,
    description: 'algodon peinado',
    category: 'campera',
    stock: 25,
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500);
    })
}


export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1500);
    })
}