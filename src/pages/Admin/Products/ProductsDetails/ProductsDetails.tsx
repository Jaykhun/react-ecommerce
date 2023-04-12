import { Loader, Message } from '@/components/UI'
import productApi from '@/store/api/product'
import { useParams } from 'react-router-dom'
import './ProductsDetails.scss'

const ProductsDetails = () => {
    window.scrollTo(0, 0)
    const { id } = useParams()
    const { data: country, isLoading, isError, error } = productApi.useGetSingleProductQuery(Number(id))

    return (
        <div className='products-details'>
            {
                isLoading
                    ? <Loader isLoading={isLoading} />
                    : isError
                        ? <Message error={error} />
                        : <>
                            <div className="products-details__body">
                                {country?.name}
                            </div>
                        </>
            }
        </div>
    )
}

export default ProductsDetails