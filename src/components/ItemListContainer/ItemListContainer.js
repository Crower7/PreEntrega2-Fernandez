import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asynMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const {categoryId} = useParams()
    console.log(categoryId)
    
  

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts
    asyncFunction(categoryId).then((products) => {
      setProducts(products);
    });
  }, [categoryId]);

  return (
    <div>

      <h1>{greeting}</h1>
      <ItemList products={products}/>

    </div>
  );
};

export default ItemListContainer;
