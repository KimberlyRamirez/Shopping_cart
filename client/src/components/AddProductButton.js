const AddProductButton = () => {
  return (
    <>
      <p>
        <a
          className="button add-product-button"
          onClick={() => setProductFormVisible(true)}>
          Add A Product
        </a>
      </p>
    </>
  )
}

export default AddProductButton