import EditForm from "./EditForm"
import { useState } from "react"

const Product = ({ name, price, qty }) => {
  const [editProductBtnPushed, selectEditProductBtnPushed] = useState(false)

  const editProductHandler = (e) => {
    e.preventDefault()
    selectEditProductBtnPushed(true)
  }

  const ProductInfo = () => {
    return (
      <div className="product">
        <div className="product-details">
          <h3>{name}</h3>
          <p className="price">{price}</p>
          <p className="quantity">{qty}</p>
          <div className="actions product-actions">
            <a className="button add-to-cart">Add to Cart</a>
            <a className="button edit" onClick={(e) => editProductHandler(e)}>Edit</a>
          </div>
          <a className="delete-button"><span>X</span></a>
        </div>
      </div>
    )
  }

  const ProductInfoAndEditForm = () => {
    return (
      <div>
        <div className="product">
        <div className="product-details">
          <h3>{name}</h3>
          <p className="price">{price}</p>
          <p className="quantity">{qty}</p>
          <div className="actions product-actions">
            <a className="button add-to-cart">Add to Cart</a>
            <a className="button edit" onClick={(e) => editProductHandler(e)}>Edit</a>
          </div>
          <a className="delete-button"><span>X</span></a>
        </div>
        <EditForm handler={selectEditProductBtnPushed}/>
      </div>
      </div>
    )
  }

  return (
    <div>
      {editProductBtnPushed ? <ProductInfoAndEditForm/> : <ProductInfo/> }
    </div>
  )
}

export default Product