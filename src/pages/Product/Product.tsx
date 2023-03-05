import { v4 as keyId } from "uuid"
import "./Product.scss"
import ProductSorted from './ProductSorted'

const Product = () => {
    window.scrollTo(0, 0);

    return (
        <ProductSorted key={keyId()} />
    )
}

export default Product