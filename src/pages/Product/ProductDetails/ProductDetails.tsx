import { Link, useParams } from "react-router-dom"
import { v4 as keyId } from "uuid"
import Location from "../../../components/Location"
import { useGetSingleProductQuery } from "../../../store/api/product/productApi"
import Loader from "./Loader"

import "swiper/css"
import "swiper/css/pagination"
import { GetCurrentUser } from '../../../helpers/getCurrentUser'
import { useAddNewOrderMutation } from '../../../store/api/order/orderApi'
import { AddOrderType } from '../../../store/api/order/orderType'
import "./ProductDetails.scss"

const ProductDetails = () => {
    window.scrollTo(0, 0)
    const { id } = useParams()
    const user = GetCurrentUser('token')
    const [addOrder, result] = useAddNewOrderMutation()
    const { data: product } = useGetSingleProductQuery(parseInt(id as string), {
        skip: !parseInt(id as string)
    })

    const addToCart = () => {
        const order: AddOrderType = {
            order: {
                user_id: user?.id,
                order_date: '2023-01-26',
                address_id: user?.addresses[0].id,
                order_status_id: 1
            },

            order_details: [{
                product_id: product?.id,
                quantity: 1,
                price: product?.price
            }]
        }

        console.log(order);

        addOrder(order)
    }

    return (
        <div className="content__body">
            <Location />
            <div className="content__product product">
                {product ?
                    <>
                        <div className="product__title title">{product.name}</div>
                        <div className="product__inner">
                            <div className="product__control">
                                <div className="product__sale sale">
                                    <div className="sale__body">
                                        <div className="word-sale">sale</div>
                                        <div className="sale__content">
                                            <div className="sale__top">
                                                <div className="product__price">{product.price} &#36;</div>
                                            </div>
                                            <div className="sale__buttons buttons">
                                                <button className="btn w-bg-r-btn w-opacity buttons__cart" onClick={addToCart}>
                                                    В корзину
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="product__info info">
                                    <div className="info__inner">
                                        <div className="info__venders">Hekiu</div>
                                        <div className="info__delivery">
                                            Доставка осуществляется курьером транспортной компании.
                                        </div>

                                        <div className="info__option option">
                                            <div className="option__item">
                                                <div className="option__title">
                                                    Выходы
                                                </div>

                                                <div className="option__info">
                                                    оптический
                                                </div>
                                            </div>

                                            <div className="option__item">
                                                <div className="option__title">
                                                    Технология 3D
                                                </div>

                                                <div className="option__info">
                                                    активная
                                                </div>
                                            </div>

                                            <div className="option__item">
                                                <div className="option__title">
                                                    Разрешение экрана
                                                </div>

                                                <div className="option__info">
                                                    4K UHD, HDR
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product__slider">
                                {product.images?.map(pImage =>
                                    <div className="product__img" key={keyId()}>
                                        <img src={pImage.image_path} alt={product.name} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                    : <Loader />
                }

                <div className="product__footer">
                    <div className="product__navigation">
                        <Link to={{ pathname: `/product/${parseInt(id as string) - 1}` }} className="product__previous">
                            Предыдущий
                        </Link>

                        <Link to={{ pathname: `/product/${parseInt(id as string) + 1}` }} className="product__next">
                            Следующий
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails