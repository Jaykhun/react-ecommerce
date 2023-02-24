import { v4 as keyId } from "uuid"
import "./Product.scss"
import ProductSorted from './ProductSorted'

const Product = () => {
    return (
        <ProductSorted key={keyId()} />
    )
}

export default Product