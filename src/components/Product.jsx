import "./Product.css";
import { AddCartBtn } from "./AddCartBtn";
import { Discount } from "./Discount";
import { Heart } from "./Heart";

const Product = (props) => {
  return (
    <div className="product">
        <Discount discount={props.discount}/>
        <Heart/>
        <img className="product__img" src="https://picsum.photos/180" alt="Productos"/>
        <h2 className="product__name">{props.name}</h2>
        <div className="product__details">
            <p className="product__oldPrice">${props.oldPrice}</p>
            <p className="product__Price">${props.newPrice}</p>
            <AddCartBtn name={props.name} newPrice={props.newPrice} />
        </div>
        
    </div>
  )
}

export {Product}