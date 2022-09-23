import EditableProduct from "./EditableProduct"
import { useState, useEffect } from "react"
import AddProductForm from "./AddProductForm"

const ProductList = ({ handleAddToCart, products, setProducts }) => {
  const [addProductPushed, selectProductPushed] = useState(false)


  const addProductHandler = (e) => {
    e.preventDefault()
    selectProductPushed(true)
  }

  const AddProductButton = () => {
    return (
      <p><a className="button add-product-button" onClick={addProductHandler}>Add A Product</a></p>
    )
  }

  return (
    <div>
      {products.map((product, idx) => {
        return <EditableProduct products={products} setProducts={setProducts} handleAddToCart={handleAddToCart} products={products} key={product+idx} title={product.title} price={product.price} quantity={product.quantity}/>
      })}
      {addProductPushed ? <AddProductForm/> : <AddProductButton/>}
    </div>
  )
}

export default ProductList