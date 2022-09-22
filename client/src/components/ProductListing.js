import EditableProduct from "./EditableProduct"
import { useState } from "react"
import AddProductForm from "./AddProductForm"

const ProductList = () => {
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
      <div className="product-listing">
      <h2>Products</h2>
        <EditableProduct
          name="Amazon Kindle E-reader"
          price="$79.99"
          qty="5 left in stock"
        />

        <EditableProduct
          name="Apple 10.5-Inch ipadPro"
          price="649.99"
          qty="2 left in stock"
        />

        <EditableProduct
          name="Yamaha Portable Keyboard"
          price="$155.99"
          qty="0 left in stock"
        />
      </div>
      {addProductPushed ? <AddProductForm/> : <AddProductButton/>}
    </div>
  )
}

export default ProductList