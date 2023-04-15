import { Loader, Message } from '@/components/UI'
import productApi from '@/store/api/product'
import ProductsItem from './ProductsItem'

const ProductsBody = () => {
    const { data: products, isFetching, isError, error } = productApi.useGetAllProductsQuery()

    return (
        <div className='products__body'>
            {
                isFetching
                    ? <Loader isLoading={isFetching} />
                    : isError
                        ? <Message error={error} />
                        : products?.length
                            ? products?.map(product => <ProductsItem product={product} key={product.id} />)
                            : <Message value='нет продуктов' />
            }
        </div>
    )
}

export default ProductsBody