import { Loader, Message } from '@/components/UI'
import categoryApi from '@/store/api/category'
import { useParams } from 'react-router-dom'
import './CategoriesDetails.scss'

const CategoriesDetails = () => {
    const { id } = useParams()
    const { data: category, isLoading, isError, error } = categoryApi.useGetSingleCategoryQuery(Number(id))

    return (
        <div className='categories-details'>
            {
                isLoading
                    ? <Loader isLoading={isLoading} />
                    : isError
                        ? <Message error={error} />
                        : <>
                            <div className="products-details__title">
                                Информация о категории
                            </div>

                            <div className="categories-details__body">
                                <div className="categories-details__name">
                                    <span className="categories-details__txt">название:</span>
                                    <span>{category?.name}</span>
                                </div>
                                <div className="categories-details__parent">
                                    {
                                        category?.parent_category &&
                                        <><span className="categories-details__txt">родительский:</span>
                                            {category?.parent_category?.name}
                                        </>
                                    }

                                </div>

                                <div className="categories-details__children">
                                    {!!category?.children_category.length &&
                                        <>
                                            <span className="categories-details__txt">дочерний:</span>
                                            {
                                                category?.children_category.map(category =>
                                                    <div className='categories-details-category__children' key={category.id}>{category.name}</div>
                                                )
                                            }
                                        </>
                                    }
                                </div>
                            </div>
                        </>
            }
        </div>
    )
}

export default CategoriesDetails