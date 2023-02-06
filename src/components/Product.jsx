import "./Product.css"
import { AddCartBtn } from "./AddCartBtn"
const Product = (props) => {
  return (
    <div className="product">
        <img className="product__img" src="https://picsum.photos/180" alt="Productos"/>
        <h2 className="product__name">{props.name}</h2>
        <div className="product__details">
            <p className="product__oldPrice">{props.oldPrice}</p>
            <p className="product__Price">{props.newPrice}</p>
            <AddCartBtn/>
        </div>
        
    </div>
  )
}

export {Product}