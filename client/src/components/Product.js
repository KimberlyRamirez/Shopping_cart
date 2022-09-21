const Product = ({ name, price, qty }) => {
  return (
    <div class="product">
      <div class="product-details">
        <h3>{name}</h3>
        <p class="price">{price}</p>
        <p class="quantity">{qty}</p>
        <div class="actions product-actions">
          <a class="button add-to-cart">Add to Cart</a>
          <a class="button edit">Edit</a>
        </div>
        <a class="delete-button"><span>X</span></a>
      </div>
    </div>
  )
}

export default Product