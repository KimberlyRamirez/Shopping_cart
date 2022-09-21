import '../../App.css'
import ProductListing from './ProductListing'
import Cart from './Cart'
import Form from './Form'

const App = () => {
  return (
    <div id="app">
    <header>
      <Cart />
    </header>

    <main>
      <ProductListing />
      <Form />


    </main>
  </div>
  )
}

export default App