import { useState } from "react"

const EditForm = ({ title, price, quantity, onShowForm }) => {
  let [productName, setProduct] = useState(title)
  let [priceVal, setPrice] = useState(price)
  let [qty, setQtyValue] = useState(quantity)

  let cancelBtnHandler = (e) => {
    e.preventDefault()
    onShowForm(false)
  }

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input type="text" id="product-name" value={productName} onChange={(e) => {setProduct(e.target.value)}}/>
          </div>

          <div className="input-group">
            <label htmlFor="product-priceVal">Price</label>
            <input type="text" id="product-priceVal" value={priceVal} onChange={(e => {setPrice(e.target.value)})}/>
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" value={qty} onChange={(e) => {setQtyValue(e.target.value)}}/>
          </div>

          <div className="actions form-actions">
            <a className="button">Update</a>
            <a className="button" onClick={(e) => cancelBtnHandler(e)}>Cancel</a>
          </div>
      </form>
    </div>
  )
}

export default EditForm