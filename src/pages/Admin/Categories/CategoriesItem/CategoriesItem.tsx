import React, { FC } from "react";
import { ICategory } from "../../../../store/api/category/categoryTypes";
import {useActions} from "../../../../hooks/useActions";
import {useDeleteCategoryMutation} from "../../../../store/api/category/categoryApi";
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
        <div className='categories__item'>
            <div className="categories__name">{name}</div>
            <div className="categories__action">
                <div className="categories__edit action-edit" onClick={handleEdit}></div>
                <div className="categories__delete action-delete" onClick={handleDelete}></div>
            </div>
        </div>
    )
}

export default CategoriesItem