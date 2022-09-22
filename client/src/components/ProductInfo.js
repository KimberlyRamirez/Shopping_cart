const ProductInfo = ({ name, price, qty, onShowForm }) => {
    return (
      <div className="product">
        <div className="product-details">
          <h3>{name}</h3>
          <p className="price">{price}</p>
          <p className="quantity">{qty}</p>
          <div className="actions product-actions">
            <a className="button add-to-cart">Add to Cart</a>
            <a className="button edit" onClick={onShowForm}>Edit</a>
          </div>
          <a className="delete-button"><span>X</span></a>
        </div>
      </div>
    )
  }

  export default ProductInfo;