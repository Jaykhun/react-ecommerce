import { Button, Loader, Message } from '@/components/UI'
import attributeApi from '@/store/api/attribute'
import categoryApi from '@/store/api/category'
import { useParams } from 'react-router-dom'
import './CategoriesDetails.scss'

const CategoriesDetails = () => {
    const { id } = useParams()
    const category = categoryApi.useGetSingleCategoryQuery(Number(id))
    const attribute = attributeApi.useGetCategoryAttributesQuery(Number(id))
    const [addAttribute, result] = attributeApi.useAddAttributeMutation()

    const state = {
        isLoading: category.isLoading && attribute.isLoading,
        isError: category.isError || attribute.isError,
        error: category.error || attribute.error
    }

    return (
        <div className='categories-details'>
            {
                state.isLoading
                    ? <Loader isLoading={state.isLoading} />
                    : state.isError
                        ? <Message error={state.error} />
                        : <>
                            <div className="products-details__title">
                                Информация о категории
                            </div>

                            <div className="categories-details__body">
                                <div className="categories-details__name">
                                    <span className="categories-details__txt">название:</span>
                                    <span>{category.data?.name}</span>
                                </div>
                                <div className="categories-details__parent">
                                    {
                                        category.data?.parent_category &&
                                        <><span className="categories-details__txt">родительский:</span>
                                            {category.data?.parent_category?.name}
                                        </>
                                    }

                                </div>

                                <div className="categories-details__children">
                                    {!!category.data?.children_category.length &&
                                        <>
                                            <span className="categories-details__txt">дочерний:</span>
                                            {
                                                category.data?.children_category.map(category =>
                                                    <div className='categories-details__array' key={category.id}>{category.name}</div>
                                                )
                                            }
                                        </>
                                    }
                                </div>

                                <div className="categories-details__attribute">
                                    {!!attribute.data?.length &&
                                        <>
                                            <span className="categories-details__txt">Атрибут:</span>
                                            {
                                                attribute.data?.map(item =>
                                                    <div className='categories-details__sub' key={item.id}>
                                                        <div className='categories-details__array'>{item.attribute_name}</div>

                                                        <span className="categories-details__txt">Варианты:</span>
                                                        {!!item.variants.length && item.variants.map(variant =>
                                                            <div className='categories-details__array' key={variant.id}>
                                                                {variant.value}
                                                            </div>)
                                                        }
                                                    </div>
                                                )
                                            }
                                        </>
                                    }
                                </div>
                            </div>

                            <div className="categories-details__btn">
                                <Button hoverEffect>Добавить атрибут</Button>
                            </div>
                        </>
            }
        </div>
    )
}

export default CategoriesDetails