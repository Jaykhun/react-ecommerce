import { Loader, Message } from '@/components/UI'
import { categoryApi } from '@/store/api'
import CategoriesItem from './CategoriesItem'

const CategoriesBody = () => {
    const { data: categories, isFetching, isError, error, isLoading, isSuccess } = categoryApi.useGetAllCategoriesQuery()

    return (
        <div className='categories__body'>
            {
                isFetching
                    ? <Loader isLoading={isFetching} />
                    : isError
                        ? <Message error={error} />
                        : categories?.length
                            ? categories?.map(category => <CategoriesItem category={category} key={category.id} />)
                            : <Message value='нет категории' />
            }
        </div >
    )
}

export default CategoriesBody