import Location from "../../../components/Location";
import Loader from "./Loader";
import {useLocation, useParams} from "react-router-dom";
import {useGetSingleProductQuery} from "../../../store/product/productApi";
import {ProductControl} from "../../../components/UI";
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import {v4 as keyId} from "uuid";

import "swiper/css";
import "swiper/css/pagination";
import "./ProductDetails.scss"


const ProductDetails = () => {
    const {id} = useParams()

    const {
        name,
        productId,
        price,
        description,
        discount,
        images,
        category
    } = useGetSingleProductQuery(parseInt(id as string), {
        skip: !parseInt(id as string),
        selectFromResult: ({data}) => ({
            productId: data?.id,
            name: data?.name,
            price: data?.price,
            description: data?.description,
            discount: data?.discount,
            images: data?.images,
            category: data?.category,
            quantity: data?.quantity
        })
    })

    return (
        <div className="content__body">
            <Location/>
            <div className="content__product product">
                {name ?
                    <>
                        <div className="product__title title">{name}</div>
                        <div className="product__inner">
                            <div className="product__control">
                                <div className="product__sale sale">
                                    <div className="sale__body">
                                        <div className="word-sale">sale</div>
                                        <div className="sale__content">
                                            <div className="sale__top">
                                                <div className="product__price">{price} &#36;</div>
                                            </div>
                                            <div className="sale__buttons buttons">
                                                <button className="btn w-bg-r-btn w-opacity buttons__cart">В
                                                    корзину
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
                                {images?.map(pImage =>
                                    <div className="product__img" key={keyId()}>
                                        <img src={pImage.image_path} alt={name}/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                    : <Loader/>
                }

                <div className="product__footer">
                    <div className="product__navigation">
                        <Link to={{pathname: `/product/${parseInt(id as string) - 1}`}} className="product__previous">
                            Предыдущий
                        </Link>

                        <Link to={{pathname: `/product/${parseInt(id as string) + 1}`}} className="product__next">
                            Следующий
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;