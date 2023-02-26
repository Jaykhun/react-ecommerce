import { useParams } from 'react-router-dom'
import { useGetProductsByCategoryQuery } from '../../../store/api/category/categoryApi'
import ProductSlider from '../ProductSlider'
import "./ProductSorted.scss"

const ProductSorted = () => {
    const { id } = useParams()
    const { data: productsByCategory, error, isLoading } = useGetProductsByCategoryQuery(id, { skip: !id })

    return (
        <div className="product__row">
            <ProductSlider data={productsByCategory} isLoading={isLoading} error={error} key={id} />
        </div>
    )
}

export default ProductSorted