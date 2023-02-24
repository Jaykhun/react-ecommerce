import { FC } from 'react'
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { v4 as keyId } from "uuid"
import { Error } from "../../../components/UI"
import { ProductItem, ProductLoader } from "./../index"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface ProductSliderPropsType {
    data: any,
    isLoading: boolean,
    error: any
}

const ProductSlider: FC<ProductSliderPropsType> = ({ data, isLoading, error }) => {
    const loaderCount = ['1', '2', '3', '4']

    return (
        <div className="product__slider" key={keyId()}>
            <Swiper
                slidesPerView={1}
                spaceBetween={50}
                scrollbar={{ draggable: true }}
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
                key={keyId()}
            >
                {isLoading
                    ? <>
                        {loaderCount.map(_ =>
                            <SwiperSlide className="product__item item" key={keyId()}>
                                <ProductLoader />
                            </SwiperSlide>
                        )}
                    </>
                    : error
                        ? <Error error={error} />
                        : data?.map((p: any) =>
                            <>
                                <SwiperSlide className="product__item item" key={keyId()}>
                                    <ProductItem product={p} key={keyId()} />
                                </SwiperSlide>
                            </>
                        )}
            </Swiper>
        </div>
    )
}

export default ProductSlider