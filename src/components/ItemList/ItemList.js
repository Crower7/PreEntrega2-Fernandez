import React from 'react'
import ItemCard from '../ItemCard/ItemCard';

export const ItemList = ({products}) => {
  return (
    <div>
        {" "}
        {products.map((product) => {
          return ( 
            <ItemCard {...product}/>
            
          );
        })}
      </div>
  )
}
