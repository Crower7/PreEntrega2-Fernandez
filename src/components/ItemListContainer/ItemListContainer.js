import { useEffect, useState } from "react"
import { getProducts } from "../../asynMock"

const ItemListContainer = ({greeting}) => {

  useEffect ( () => {
      getProducts ()
        .then(products => {
            console.log(products)
        })
    }, [])

  return (
    <h1>{greeting}</h1>
  )
}

export default ItemListContainer