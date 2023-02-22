import { FC } from 'react'
import { Link } from "react-router-dom"
import { ICategory } from "../../store/category/categoryTypes"

interface CatalogItemPropsType {
    category: ICategory
}

const CatalogItem: FC<CatalogItemPropsType> = ({ category }) => {
    const { name, parent_category_id, id, children_category } = category

    return (
        <li className="menu__item item">
            <Link to={{ pathname: `product/category/${id}` }} className="item__link">
                <span className="item__title">{name}</span>
            </Link>

            {children_category?.length !== 0 ? <ul className="item__menu">
                {children_category?.map((subCategory: any) =>
                    <li className="item__sublevel sublevel" key={subCategory.id}>
                        <Link to={{ pathname: `product/category/${subCategory.id}` }} className="sublevel__title">{subCategory.name}</Link>
                    </li>)}
            </ul> : ''}
        </li>
    )
}

export default CatalogItem