import './ItemCard.css'

const ItemCard = ({name, precio, img}) =>  { 
 
  return  ( 
    <div className="card">
      
       <div className='card_img'> {img} </div> 
        <h2>{name}</h2>
        <h3 className='btnPrecio'>{precio}</h3>
        <button className='shakeFix btnComprar'>comprar</button>
    </div>

  


    
  )
  
} 

export default ItemCard

{/* ItemCard muestra el precio y los nombres del .map que le hacen a los productos*/}

{/* aca poner el boton de detalle y de comprar mas adelante. */}