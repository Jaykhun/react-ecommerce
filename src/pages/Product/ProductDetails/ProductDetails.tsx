import { ErrorMessage } from "@hookform/error-message/dist"
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useParams } from "react-router-dom"
import "swiper/css"
import "swiper/css/pagination"
import { v4 as keyId } from "uuid"
import { ActionAlert, ActionLoader, InputError } from '../../../components/UI'
import { GetCurrentUser } from '../../../helpers/getCurrentUser'
import { useAddNewOrderMutation } from '../../../store/api/order/orderApi'
import { AddOrderType } from '../../../store/api/order/orderType'
import { useGetSingleProductQuery } from "../../../store/api/product/productApi"
import { useAddReviewMutation } from '../../../store/api/review/reviewApi'
import { AddReviewType } from '../../../store/api/review/reviewType'
import Loader from "./Loader"
import "./ProductDetails.scss"

const ProductDetails = () => {
    window.scrollTo(0, 0);
    const { id } = useParams()
    const user = GetCurrentUser('token')
    const [addOrder, result] = useAddNewOrderMutation()
    const [addReview] = useAddReviewMutation()
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

        addOrder(order)
        reset()
    }

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm<AddReviewType>({ mode: 'onBlur' })

    const onSubmit: SubmitHandler<AddReviewType> = (data) => {
        const review: AddReviewType = {
            review: {
                stars: 4
            },
            comment: {
                comment: data.comment.comment,
                created_date: '2023-01-26'
            }
        }
        addReview({ id: user?.id, review: review })
    }

    return (
        <>
            <div className="content__body">
                <div className="site-path">
                    <Link className="site-history" to="/">Главная</Link>
                    <Link className="site-history" to={`/product/category/${product?.category.id}`}>{product?.category.name}</Link>
                    <span className="current-site" >{product?.name}</span>
                </div>
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
                                            <Link to={`/product/category/${product?.category.id}`} className="info__venders">{product?.category.name}</Link>
                                            <div className="info__delivery">
                                                {product?.description}
                                            </div>

                                            {/* <div className="info__option option">
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
                                        </div> */}
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
                            {user ? <form className="content__review review" onSubmit={handleSubmit(onSubmit)}>
                                <label htmlFor="addReview" className="review__label input-text">Оставьте отзыв</label>
                                <div className="review__form">
                                    <input type="text" id="addReview"
                                        className="review__input input-style"
                                        {...register('comment.comment', {
                                            required: 'Поле обязательно к заполнению',
                                            minLength: { value: 5, message: 'Минимум 5 символов' },
                                            maxLength: { value: 20, message: 'Максимум 100 символов' }
                                        })}
                                    />
                                    <ErrorMessage name={'comment.comment'}
                                        errors={errors}
                                        render={({ message }) => <InputError message={message} />}
                                    />
                                    <button className="review__submit btn r-btn w-opacity">Добавить</button>
                                </div>
                            </form> : ''}
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
            {result.isLoading && <ActionLoader />}
            {result.isSuccess && <ActionAlert message='Спасибо за покупку' success={true} />}
        </>
    )
}

export default ProductDetails