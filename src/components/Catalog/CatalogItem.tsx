import { FetchCategory, ICategory } from '@/models/categoryTypes'
import { FC } from 'react'
import { Link } from "react-router-dom"

interface CatalogItemProps {
    category: FetchCategory
}

const CatalogItem: FC<CatalogItemProps> = ({ category }) => {
    const { name, id, children_category } = category

    return (
        <li className="catalog-list__item">
            <Link to={{ pathname: `product/category/${id}` }} className="catalog-list__link">
                <span className="list__title">{name}</span>
            </Link>

            {children_category?.length !== 0
                ? <ul className="catalog-list__menu">
                    {children_category?.map((subCategory: ICategory) =>
                        <li className="catalog-list__sublevel" key={subCategory.id}>
                            <Link to={{ pathname: `product/category/${subCategory.id}` }}
                                className="catalog-list__title">
                                {subCategory.name}
                            </Link>
                        </li>)}
                </ul>
                : ''
            }
        </li>
    )
}

export default CatalogItem