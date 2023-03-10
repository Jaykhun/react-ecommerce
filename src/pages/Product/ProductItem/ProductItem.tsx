import {FC} from 'react'
import {useNavigate} from "react-router-dom"
import {IProduct} from "../../../store/api/product/productTypes"
import "./ProductItem.scss"
import {useActions} from "../../../hooks/useActions";
import {Cookies} from "react-cookie";

interface ProductItemPropsType {
    product: IProduct
}

const ProductItem: FC<ProductItemPropsType> = ({product}) => {
    const cookie = new Cookies()
    const token = cookie.get('token')
    const {onSignInClick, login} = useActions()
    const {name, images, category, id, price, discount, quantity, description} = product

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/product/${id}`)
    }

    const handleAddToCart = () => {
        if (token) {
            console.log(token)
        } else onSignInClick()
    }

    return (
        <div className="item__row">
            <div className="item__top" onClick={handleNavigate}>
                <div className="item__img">
                    <img src={images[0].image_path} alt={name}/>
                </div>

                <div className="item__prices">
                    <div className="item__price price-current">{price} &#36;</div>
                    {discount > 1 ? <div className="item__discount price-discount">{discount}</div> : ''}
                </div>
            </div>

            <div className="item__body">
                <div className="item__info">
                    <div className="item__name product-name">{name}</div>
                </div>

                <div className="item__control control">
                    <div className="item__sale">
                        <div className="word-sale">sale</div>
                    </div>

                    {/*<div className="control__top">*/}
                    {/*    <button className="btn r-btn w-opacity item__cart" onClick={handleAddToCart}>*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default ProductItem