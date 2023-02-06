import './App.css';
import ProductContainer from "./components/ProductContainer";
import { Product } from "./components/Product";
import data from './components/products.json';

const App = () => {

    return (
        <ProductContainer>
            {data.map(product=>
            <Product 
                key={product.key}
                name={product.name}
                oldPrice={product.price}
                newPrice={product.price - (product.price * product.discount / 100)}
            />
            )}
            
        </ProductContainer>
    )
}

export default App