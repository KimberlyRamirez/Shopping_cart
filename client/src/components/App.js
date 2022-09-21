import '../../App.css'
import ProductListing from './ProductListing'
import Cart from './Cart'

const App = () => {
  return (
    <div id="app">
    <header>
      <Cart/>
    </header>

    <main>
      <ProductListing/>
    </main>
  </div>
  )
}

export default App