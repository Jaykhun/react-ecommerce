import React, { FC } from "react";
import { ICategory } from "../../../../store/category/categoryTypes";
import "./CategoriesItem.scss";

interface CategoriesItemPropsType {
    category: ICategory
}

const CategoriesItem: FC<CategoriesItemPropsType> = ({ category }) => {
    const { id, children_category, parent_category, name } = category

    return (
        <>
        {name}
        </>
    )
}

export default CategoriesItem