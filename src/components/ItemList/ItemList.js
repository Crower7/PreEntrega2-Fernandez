import React from 'react'
import ItemCard from '../ItemCard/ItemCard';
import './ItemList.css'

export const ItemList = ({products}) => {
  return (
    <div className='contenedor'>
        {" "}
        {products.map((product) => {
          return ( 
            
            <ItemCard key = {product.id} {...product}/>
            
          );
        })}
      </div>
  )
}
