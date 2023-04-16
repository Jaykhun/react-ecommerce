import { Loader, Message } from '@/components/UI'
import { categoryAPi } from '@/store/api'
import CategoriesItem from './CategoriesItem'

const CategoriesBody = () => {
    const { data: categories, isFetching, isError, error, isLoading, isSuccess } = categoryAPi.useGetAllCategoriesQuery()

    return (
        <div className='categories__body'>
            {
                isLoading
                    ? <Loader isLoading={isLoading} />
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