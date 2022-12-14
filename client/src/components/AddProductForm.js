import { useState } from "react"
import Service from "../services/shopping_cart"

const AddProductForm = ({ setProductFormVisible, setProducts, products }) => {
  let [productName, setProductName] = useState("")
  let [price, setPrice] = useState("")
  let [qty, setQty] = useState("")

  let handleAddProduct = (e) => {
    e.preventDefault()
    const newProduct = { title: productName, price, quantity: qty }
    Service.createProduct(newProduct).then(res => {
      setProducts([...products, res])
    })

    setProductFormVisible(false)
  }

  return (
    <div className="add-form visible">
    <p><a className="button add-product-button">Add A Product</a></p>
    <h3>Add Product</h3>
    <form>
      <div className="input-group">
        <label htmlFor="product-name">Product Name</label>
        <input type="text" id="product-name" value={productName} onChange={(e) => {setProductName(e.target.value)}}/>
      </div>

      <div className="input-group">
        <label htmlFor="product-price">Price</label>
        <input type="text" id="product-price" value={price} onChange={(e) => {setPrice(e.target.value)}}/>
      </div>

      <div className="input-group">
        <label htmlFor="product-quantity">Quantity</label>
        <input type="text" id="product-quantity" value={qty} onChange={(e) => {setQty(e.target.value)}}/>
      </div>

      <div className="actions form-actions">
        <a className="button" onClick={handleAddProduct}>Add</a>
        <a className="button" onClick={() => setProductFormVisible(false)}>Cancel</a>
      </div>
    </form>
  </div>
  )
}

export default AddProductForm