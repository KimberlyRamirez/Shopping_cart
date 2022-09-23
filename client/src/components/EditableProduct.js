import EditForm from "./EditForm"
import { useState } from "react"

const EditableProduct = ({ title, price, quantity, handleAddToCart, setProducts, products }) => {
  const [isFormVisible, setIsFormVisible] = useState(false)

  const handleShowForm = (e) => {
    e.preventDefault()
    setIsFormVisible(true)
  }

  return (
    <>
      <div className="product">
        <div className="product-details">
          <h3>{title}</h3>
          <p className="price">${price}</p>
          <p className="quantity">{quantity} left in stock</p>
          {isFormVisible ? <EditForm products={products} setProducts={setProducts} title={title} price={price} quantity={quantity} onShowForm={setIsFormVisible}/> : ( <div className="actions product-actions">
            <a onClick={(e) => {handleAddToCart(e, title)}} className="button add-to-cart">Add to Cart</a>
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