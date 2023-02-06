import './App.css';
import ProductContainer from "./components/ProductContainer";
import { Product } from "./components/Product";

const App = () => {

    return (
        <ProductContainer>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            
        </ProductContainer>
    )
}

export default App