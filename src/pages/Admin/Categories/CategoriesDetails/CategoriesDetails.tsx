import { Attribute } from '@/components/Attribute'
import { Button, Loader, Message } from '@/components/UI'
import { useActions } from '@/hooks/useActions'
import categoryApi from '@/store/api/category'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './CategoriesDetails.scss'

const CategoriesDetails = () => {
    const { id } = useParams()
    const { setCategoryId, openAttributeAddModal } = useActions()
    const { data: category, isLoading, isError, error } = categoryApi.useGetSingleCategoryQuery(Number(id))
    
    const handleAdd = () => openAttributeAddModal()

    useEffect(() => {
        setCategoryId(Number(id))
    }, [id])

    return (
        <div className='categories-details'>
            {
                isLoading
                    ? <Loader isLoading={isLoading} />
                    : isError
                        ? <Message error={error} />
                        : <>
                            <div className="products-details__header">
                                <div className="products-details__title">
                                    Информация о категории
                                </div>

                                <div className="products-details__add" onClick={handleAdd}>
                                    <Button hoverEffect>Добавить атрибут</Button>
                                </div>
                            </div>


                            <div className="categories-details__body">
                                <div className="categories-details__name">
                                    <span className="categories-details__txt">название:</span>
                                    <span>{category?.name}</span>
                                </div>
                                <div className="categories-details__parent">
                                    <span className="categories-details__txt">родительский:</span>
                                    {
                                        category?.parent_category
                                            ? <span>{category?.parent_category?.name}</span>
                                            : <div className='categories-details__empty'>Пусто</div>
                                    }
                                </div>

                                <div className="categories-details__children">
                                    <span className="categories-details__txt">дочерний:</span>
                                    {
                                        category?.children_category.length
                                            ? category?.children_category.map(category =>
                                                <div className='categories-details__array' key={category.id}>{category.name}</div>
                                            )
                                            : <div className='categories-details__empty'>Пусто</div>
                                    }
                                </div>

                                <div className="categories-details__attribute">
                                    <Attribute />
                                </div>
                            </div>
                        </>
            }
        </div>
    )
}

export default CategoriesDetails