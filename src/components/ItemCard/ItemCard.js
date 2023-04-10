import './ItemCard.css'

const ItemCard = ({name, precio, img}) =>  { 
 
  return  ( 
    <div className="card">
       <div className='card_img'> {img} </div> 
        <h2>{name}</h2>
        <h3>{precio}</h3>
    </div>
    
  )
  
} 

export default ItemCard

