import "./Product.css"
const Product = () => {
  return (
    <div className="product">
        <img className="product__img" src="https://picsum.photos/180" alt="Productos"/>
        <h2 className="product__name">Camisa</h2>
        <div className="product__details">
            <p className="product__oldPrice">$200</p>
            <p className="product__Price">$100</p>
        </div>

    </div>
  )
}

export {Product}