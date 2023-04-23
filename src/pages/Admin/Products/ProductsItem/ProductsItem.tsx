import { useActions } from '@/hooks/useActions'
import { FetchProduct } from '@/models/productTypes'
import productApi from '@/store/api/product'
import { Notify } from 'notiflix'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductsSkeleton from '../ProductsSkeleton'
import './ProductsItem.scss'

interface ProductsItemProps {
    product: FetchProduct
}

const ProductsItem: FC<ProductsItemProps> = ({ product }) => {
    const { openProductEditModal } = useActions()
    const navigate = useNavigate()
    const { id, name, description, category, price, discount, images, quantity } = product
    const [deleteProduct, { isLoading }] = productApi.useDeleteProductMutation()

    const handleNavigate = () => navigate(`/admin/products/${id}`)
    const handleEdit = () => openProductEditModal(id)
    const handleDelete = async () => {
        try {
            await deleteProduct(id).unwrap()
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

    if(isLoading) return <ProductsSkeleton/>

    return (
        <div className='product__item item-products'>
            <div className="item-products__body" onClick={handleNavigate}>
                <div className="item-products__content">
                    <div className="item-products__img">
                        <img src={images[0].image_path} alt={name} />
                    </div>

                    <div className="item-products__info">
                        <div className="item-products__name">{name}</div>
                        <div className="item-products__category products-category">
                            <div className="products-category__name">{category.name}</div>

                            {category.children_category.map(c =>
                                <div className="products-category__children" key={c.id}>{c.name}</div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="item-products__desc">
                    {description}
                </div>

                <div className="item-products__price">
                    {price} $
                </div>
            </div>

            <div className="item-products__actions">
                <div className="item-products__edit" onClick={handleEdit}></div>
                <div className="item-products__delete" onClick={handleDelete}></div>
            </div>
        </div>

    )
}

export default ProductsItem