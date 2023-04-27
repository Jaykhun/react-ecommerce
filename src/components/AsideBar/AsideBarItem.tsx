import { FetchProduct } from '@/models/productTypes'
import { calculateDiscount } from '@/utils/calculateDiscount'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface AsideBarItemProps {
    products: FetchProduct
}

const AsideBarItem: FC<AsideBarItemProps> = ({ products }) => {
    const { name, images, id, price, discount } = products
    const navigate = useNavigate()

    const handleNavigate = () => navigate(`/product/${id}`)

    return (
        <div className="asidebar-discount__item" onClick={handleNavigate}>
            <div className="asidebar-discount__top">
                <div className="asidebar-discount__img">
                    <img
                        src={images[0].image_path}
                        alt={name} />
                </div>

                <div className="asidebar-discount__price">
                    <span className="asidebar-discount__current-price">{calculateDiscount(price, discount)} &#36;</span>
                    <span className="asidebar-discount__past-price">{price} &#36;</span>
                </div>
            </div>

            <div className="asidebar-discount__info">
                <div className="asidebar-discount__product">
                    {name}
                </div>
                <div className="asidebar-discount__cart"></div>
            </div>
        </div>
    )
}

export default AsideBarItem