const products = [{
    id: '1',
    name: 'remera',
    precio: 1800,
    img: 'https://universoventura.vteximg.com.br/arquivos/ids/193028-600-600/Remera-Manga-Corta-DC-Shoes-Round-We-Go-Urbano-Hombre-Negro-1222102104.jpg?v=637789732032600000',
    stock:120,
    description: 'algodon peinado',
    categoria: 'remera',



}]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500);
    })
}
