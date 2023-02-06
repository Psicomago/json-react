import "./ProductContainer.css";

const ProductContainer = (props) => {
  return (
    <section className="product__section">
        <h1 className="product__title">Nuestros Productos</h1>
        <div className="product__container">
            {props.children}
        </div>
    </section>
   
  )
}

export default ProductContainer