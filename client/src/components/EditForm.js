import { useState } from "react"

const EditForm = ({ name, price, qty, handler }) => {
  let [productValue, setProductValue] = useState(name)
  let [priceValue, setPriceValue] = useState(price)
  let [qtyValue, setQtyValue] = useState(qty)

  let cancelBtnHandler = (e) => {
    e.preventDefault()
    handler(false)
  }

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input type="text" id="product-name" value={productValue} onChange={(e) => {setProductValue(e.target.value)}}/>
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input type="text" id="product-price" value={priceValue} onChange={(e => {setPriceValue(e.target.value)})}/>
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" value={qtyValue} onChange={(e) => {setQtyValue}}/>
          </div>

          <div className="actions form-actions">
            <a className="button">Update</a>
            <a className="button" onClick={cancelBtnHandler}>Cancel</a>
          </div>
      </form>
    </div>
  )
}

export default EditForm