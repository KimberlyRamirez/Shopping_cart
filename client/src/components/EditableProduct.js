import EditForm from "./EditForm"
import { useState } from "react"

const EditableProduct = ({ name, price, qty }) => {
  const [isFormVisible, setIsFormVisible] = useState(false)

  const handleShowForm = (e) => {
    e.preventDefault()
    setIsFormVisible(true)
  }
  return (
    <>
      <div className="product">
        <div className="product-details">
          <h3>{name}</h3>
          <p className="price">{price}</p>
          <p className="quantity">{qty}</p>
          {isFormVisible ? <EditForm name={name} price={price} qty={qty} onShowForm={handleShowForm}/> : ( <div className="actions product-actions">
            <a className="button add-to-cart">Add to Cart</a>
            <a className="button edit" onClick={handleShowForm}>Edit</a>
          </div>
          )}
          <a className="delete-button"><span>X</span></a>
        </div>
      </div>
      
    </>
  )
}

export default EditableProduct