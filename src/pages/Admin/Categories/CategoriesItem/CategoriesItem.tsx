import { Skeleton } from '@/components/UI'
import { useActions } from '@/hooks/useActions'
import { FetchCategory } from '@/models/categoryTypes'
import categoryApi from '@/store/api/category'
import { Notify } from 'notiflix'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import './CategoriesItem.scss'

interface CategoriesItemProps {
    category: FetchCategory
}

const CategoriesItem: FC<CategoriesItemProps> = ({ category }) => {
    const { openCategoryEditModal, setCategoryId } = useActions()
    const navigate = useNavigate()
    const { id, name, parent_category, children_category } = category
    const [deleteCategory, { isLoading }] = categoryApi.useDeleteCategoryMutation()

    const handleNavigate = () => {
        navigate(`/admin/categories/${id}`)
        setCategoryId(id)
    }

    const handleEdit = () => openCategoryEditModal(id)
    const handleDelete = async () => {
        try {
            await deleteCategory(id).unwrap()
            Notify.success(`${name} успешно удален`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }

        catch (e: any) {
            Notify.failure(`Ошибка при удаление ${name}, статус: ${e.status}`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }
    }

    if (isLoading) return <Skeleton isLoading={isLoading} />

    return (
        <div className='categories__item item-categories'>
            <div className="item-categories__body" onClick={handleNavigate}>
                <div className="item-categories__name">{name}</div>
                <div className="item-categories__parent">
                    {parent_category?.name}
                </div>
                <div className="item-categories__children children-categories">
                    {
                        children_category.map(category =>
                            <div className='children-categories__item' key={category.id}>
                                {category.name}
                            </div>)
                    }
                </div>
            </div>

            <div className="item-categories__actions">
                <div className="item-categories__edit" onClick={handleEdit}></div>
                <div className="item-categories__delete" onClick={handleDelete}></div>
            </div>
        </div>
    )
}

export default CategoriesItem