import axios from 'axios';
const baseUrl = "api/products"

const getAll = async () => {
  let req = await axios.get(baseUrl)
  return req.data
}

const getCart = async () => {
  let req = await axios.get("api/cart")
  return req.data
}

const addToCart = async (productId) => {
  let req = await axios.post("api/add-to-cart", {productId})
  return req.data
}

const checkout = async () => {
  let req = await axios.post("api/checkout")
  return req
}

const updateProduct = async (id, product) => {
  let req = await axios.put(`api/products/${id}`, product)
  return req.data
}

export default { getAll, getCart , addToCart, checkout, updateProduct }
