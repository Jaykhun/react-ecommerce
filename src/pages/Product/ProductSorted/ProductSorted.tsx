import productApi from '@/store/api/product'
import { useParams } from 'react-router-dom'
import { Product } from '../index'
import './ProductSorted.scss'

const ProductSorted = () => {
    const { id } = useParams()
    const { data: products = [], isFetching, isError, error } = productApi.useGetProductByCategoryQuery(Number(id), { skip: !id })

    const state = {
        isLoading: isFetching,
        isError: isError,
        error: error
    }

    return (
        <div className='product-sorted'>
            <Product products={products} state={state} />
        </div>
    )
}

export default ProductSorted