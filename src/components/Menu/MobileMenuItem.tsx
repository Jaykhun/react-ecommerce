import { FC } from 'react'
import { Link } from "react-router-dom"
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { ICategory } from "../../store/api/category/categoryTypes"

interface MobileMenuItemPropsType {
    category: ICategory
}

const MobileMenuItem: FC<MobileMenuItemPropsType> = ({category}) => {
    const {onSubMenuClick} = useActions()
    const {isSubMenuOpen} = useTypedSelector(state => state.menu)
    const {name, children_category, id} = category

    const isChildrenCategory = children_category?.length !== 0

    return (
        <>
            <li className={`mobile-menu__item item ${isSubMenuOpen ? "active-menu" : ""}`}
                onClick={() => isChildrenCategory ? onSubMenuClick() : ''} key={id}>

                <span className="item__name">{name}</span>
                {isChildrenCategory ? <span className="has-arrow"></span> : ''}

                {isChildrenCategory ?
                    <ul className={`item__menu ${isSubMenuOpen ? "active-menu" : ""}`}>
                        <li className="item__back">
                            <span className="has-long-arrow"></span>
                            Назад
                        </li>
                        <li className="item__title"><span>{name}</span></li>

                        {children_category?.map((subCategory: any) =>
                            <li className="item__sublevel sublevel" key={subCategory.id}>
                                <div className="item__link">
                                    <Link to={`product:${name}`} className="sublevel__title">{subCategory.name}</Link>
                                </div>
                            </li>)}
                    </ul> : ''}
            </li>
        </>

    );
};

export default MobileMenuItem;