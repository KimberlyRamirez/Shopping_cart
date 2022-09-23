import '../../App.css'
import ProductListing from './ProductListing'
import { useState, useEffect } from 'react'
import Services from "../services/shopping_cart"
import CartWithoutItems from './CartWithoutItems'
import CartWithItems from './CartWithItems'


const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    Services.getAll().then(res => {
      setProducts(res)
    })
  }, [])

  useEffect(() => {
    Services.getCart().then(res => {
      setCart(res)
    })
  }, [])

  const checkoutHandler = (e) => {
    e.preventDefault()
    Services.checkout()
    setCart([])
  }

  const handleAddToCart = (e, title) => {
    e.preventDefault()

    const product = products.filter(ele => ele.title === title)

    Services.addToCart(product[0]["_id"]).then(({item}) => {
      let filteredCart = cart.filter(ele => ele.title === title)
      let filteredProducts = products.filter(ele => ele.title === title)

      if (filteredCart.length > 0) {
        filteredCart[0].quantity++
        setCart([...cart])
      } else {
        setCart(cart.concat(item))
      }

      filteredProducts[0].quantity--
      setProducts([...products])
    })
  }

  return (
    <div id="app">
    <header>
      {cart.length === 0 ? <CartWithoutItems/> : <CartWithItems products={cart} checkoutHandler={checkoutHandler}/>}
    </header>

    <main>
      <ProductListing handleAddToCart={handleAddToCart} products={products} setProducts={setProducts}/>
    </main>
  </div>
  )
}

export default App