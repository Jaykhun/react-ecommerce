import React, { FC } from "react";
import { ICategory } from "../../../../store/category/categoryTypes";
import {useActions} from "../../../../hooks/useActions";
import {useDeleteCategoryMutation} from "../../../../store/category/category";
import "./CategoriesItem.scss";

interface CategoriesItemPropsType {
    category: ICategory
}

const CategoriesItem: FC<CategoriesItemPropsType> = ({ category }) => {
    const { id, name } = category
    const [deleteCategory] = useDeleteCategoryMutation()
    const {onCategoryEditPopupClick, categoryEdit} = useActions()

    const handleDelete = async () => {
        await deleteCategory(id)
    }

    const handleEdit = () => {
        onCategoryEditPopupClick()
        categoryEdit(id)
    }

    return (
        <div className='category__item'>
            <div className="category__name">{name}</div>
            <div className="category__action">
                <div className="category__edit action-edit" onClick={handleEdit}></div>
                <div className="category__delete action-delete" onClick={handleDelete}></div>
            </div>
        </div>
    )
}

export default CategoriesItem