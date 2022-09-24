const CartWithItems = ({ products, checkoutHandler }) => {
  let total = products.reduce((sum, ele) => {
    return sum + (Number(ele.quantity) * Number(ele.price))
  }, 0)

  return (
    <header>
    <h1>The Shop!</h1>
    <div className="cart">
      <h2>Your Cart</h2>
      <table className="cart-items">
        <tbody>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {products.map((product, idx) => {
            return (
              <tr key={product+idx}>
                <td>{product.title}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
              </tr>
            )
          })}
        </tbody>
        <tbody>
          <tr>
            <td colSpan="3" className="total">Total: ${total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <a className="button checkout" onClick={checkoutHandler}>Checkout</a>
    </div>
  </header>
  )
}

export default CartWithItems