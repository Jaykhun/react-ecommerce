import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import productApi from '@/store/api/product'

const ProductsEdit = () => {
    const { closeProductEditModal } = useActions()
    const { isOpenEditModal, productId } = useTypedSelector(state => state.productSlice)

    const { data: country, isFetching, isError: productIsError, error: productError } = productApi.useGetSingleProductQuery(productId, { skip: !productId })
    const [editProduct, result] = productApi.useEditProductMutation()

    const modalState = {
        isLoading: isFetching || result.isLoading,
        isError: productIsError || result.isError,
        error: productError || result.error
    } 

    return (
        <div>ProductsEdit</div>
    )
}

export default ProductsEdit