import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Mousewheel, Keyboard} from "swiper";
import {useGetAllProductsQuery} from "../../../store/product/productApi";
import {v4 as keyId} from "uuid";
import {ProductItem} from "../index";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Product.scss";


const Product = () => {
    const {data, error, isLoading} = useGetAllProductsQuery()

    console.log(data)

    return (
        <div className="product__slider">
            <Swiper
                cssMode={true}
                slidesPerView={3}
                spaceBetween={40}
                scrollbar={{draggable: true}}
                pagination={{
                    dynamicBullets: true,
                    clickable: true
                }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="productSlider"
            >
                {data?.map(p =>
                    <>
                        <SwiperSlide className="product__item item" key={keyId()}>
                            <ProductItem product={p}/>
                        </SwiperSlide>
                        <SwiperSlide className="product__item item" key={keyId()}>
                            <ProductItem product={p}/>
                        </SwiperSlide>
                        <SwiperSlide className="product__item item" key={keyId()}>
                            <ProductItem product={p}/>
                        </SwiperSlide>
                        <SwiperSlide className="product__item item" key={keyId()}>
                            <ProductItem product={p}/>
                        </SwiperSlide>
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