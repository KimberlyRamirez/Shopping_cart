import Product from "./Product"

const ProductList = () => {
  return (
    <div class="product-listing">
      <Product
        name="Amazon Kindle E-reader"
        price="$79.99"
        qty="5 left in stock"
      />

      <Product
        name="Apple 10.5-Inch ipadPro"
        price="649.99"
        qty="2 left in stock"
      />

      <Product
        name="Yamaha Portable Keyboard"
        price="$155.99"
        qty="0 left in stock"
      />
    </div>
  )
}

export default ProductList