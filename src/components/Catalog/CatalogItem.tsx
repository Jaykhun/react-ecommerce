import { FetchCategory, ICategory } from '@/models/categoryTypes'
import { FC } from 'react'
import { Link, useNavigate } from "react-router-dom"

interface CatalogItemProps {
    category: FetchCategory
}

const CatalogItem: FC<CatalogItemProps> = ({ category }) => {
    const { name, id, children_category } = category
    const navigate = useNavigate()

    const handleNavigate = (id: number) => navigate(`product/category/${id}`)

    return (
        <li className="catalog-list__item">
            <Link to={{ pathname: `product/category/${id}` }} className="catalog-list__link">
                <span className="list__title">{name}</span>
            </Link>

            {children_category?.length !== 0
                ? <ul className="catalog-list__menu">
                    {children_category?.map((subCategory: ICategory) =>
                        <li className="catalog-list__sublevel" onClick={() => handleNavigate(subCategory.id)} key={subCategory.id}>
                            <div className="catalog-list__title">
                                {subCategory.name}
                            </div>
                        </li>)}
                </ul>
                : ''
            }
        </li>
    )
}

export default CatalogItem