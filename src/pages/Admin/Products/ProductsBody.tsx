import { Loader, Message } from '@/components/UI'
import productApi from '@/store/api/product'
import { useState } from 'react'
import ProductsItem from './ProductsItem'

const ProductsBody = () => {
    const [limit, setLimit] = useState(5)
    const { data: products, isFetching, isError, error, isLoading, isSuccess } = productApi.useGetAllProductsQuery(limit)

    const handleLoadMore = () => {
        setLimit(limit + 5)
    }

    return (
        <div className='products__body'>
            {
                isLoading
                    ? <Loader isLoading={isLoading} />
                    : isError
                        ? <Message error={error} />
                        : products?.length
                            ? <>
                                {products?.map(product => <ProductsItem product={product} key={product.id} />)}
                                <div className="products__loadmore">
                                    <button disabled={isFetching} className='products__loadmore-btn' onClick={handleLoadMore}>
                                        {isFetching ? 'Loading...' : 'Load More'}
                                    </button>
                                </div>
                            </>
                            : <Message value='нет продуктов' />
            }
        </div >
    )
}

export default ProductsBody