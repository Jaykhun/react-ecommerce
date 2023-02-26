import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useGetAllCategoriesQuery} from "../../store/api/category/categoryApi";
import CatalogItem from "./CatalogItem";

const CatalogMenu = () => {
    const {isCatalogMenuOpen} = useTypedSelector(state => state.menu)
    const {data: categories} = useGetAllCategoriesQuery()

    return (
        <nav className={`aside__nav ${isCatalogMenuOpen ? "catalog-active" : ""}`}>
            <ul className="aside__menu menu">
                {categories?.map(category =>
                    <CatalogItem category={category} key={category.id}/>
                )}
            </ul>
        </nav>
    );
};

export default CatalogMenu;