import EditableProduct from "./EditableProduct"
import { useState } from "react"
import AddProductForm from "./AddProductForm"
import AddProductButton from "./AddProductButton"

const ProductList = ({ handleAddToCart, products, setProducts }) => {
  const [productFormVisible, setProductFormVisible] = useState(false)

  return (
    <div>
      {products.map((product, idx) => {
        return <EditableProduct
        products={products}
        setProducts={setProducts}
        handleAddToCart={handleAddToCart}
        key={product+idx}
        title={product.title}
        price={product.price}
        quantity={product.quantity}/>
      })}
      {productFormVisible ? <AddProductForm
        setProductFormVisible={setProductFormVisible}
        setProducts={setProducts}
        products={products}/> : <AddProductButton setProductFormVisible={setProductFormVisible}/>}
    </div>
  )
}

export default ProductList