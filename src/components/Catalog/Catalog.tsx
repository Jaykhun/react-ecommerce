import { useServiceActions } from '@/hooks/useServiceActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import categoryApi from '@/store/api/category'
import clsx from 'clsx'
import './Catalog.scss'
import CatalogItem from './CatalogItem'

const Catalog = () => {
    const { openCatalogMenu } = useServiceActions()
    const { isCatalogMenuOpen } = useTypedSelector(state => state.menuSlice)
    const { data: categories } = categoryApi.useGetAllCategoriesQuery()

    const handleOpen = () => openCatalogMenu()

    return (
        <>
            <div className={clsx('catalog', { 'catalog-active': isCatalogMenuOpen })} onClick={handleOpen}>
                <div className="catalog__title">Каталог товаров</div>
                <div className="catalog__icon"></div>
            </div>
            <nav className={clsx('catalog__menu', { 'catalog-active': isCatalogMenuOpen })}>
                <ul className="catalog__list catalog-list">
                    {categories?.map(category =>
                        <CatalogItem category={category} key={category.id} />
                    )}
                </ul>
            </nav>
        </>
    )
}

export default Catalog