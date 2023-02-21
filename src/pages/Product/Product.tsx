import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Mousewheel, Keyboard} from "swiper";
import {useGetAllProductsQuery} from "../../store/product/productApi";
import {ProductItem, ProductLoader} from "./index";
import {Error} from "../../components/UI";
import {v4 as keyId} from "uuid";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Product.scss";

const Product = () => {
    const {data, error, isLoading} = useGetAllProductsQuery()
    const loaderCount = ['1', '2', '3', '4']
    return (
        <div className="product__slider">
            <Swiper
                slidesPerView={1}
                spaceBetween={50}
                scrollbar={{draggable: true}}
                pagination={{
                    dynamicBullets: true,
                    clickable: true
                }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="productSlider"
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    }
                }}
            >
                {isLoading
                    ? <>
                        {loaderCount.map(_ =>
                            <SwiperSlide className="product__item item" key={keyId()}>
                                <ProductLoader/>
                            </SwiperSlide>
                        )}
                    </>
                    : error
                        ? <Error error={error}/>
                        : data?.map(p =>
                            <>
                                <SwiperSlide className="product__item item" key={keyId()}>
                                    <ProductItem product={p}/>
                                </SwiperSlide>
                            </>
                        )}
            </Swiper>
        </div>
    );
};

export default Product;