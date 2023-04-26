import { Message } from '@/components/UI'
import { FetchProduct } from '@/models/productTypes'
import '@/styles/slider/slick-theme.css'
import '@/styles/slider/slick.css'
import { FC } from 'react'
import Slider from "react-slick"
import './Product.scss'
import ProductItem from './ProductItem'

interface ProductProps {
  products: FetchProduct[],
  state: {
    isLoading: boolean
    isError: boolean
    error: any
  }
}

const Product: FC<ProductProps> = ({ products, state }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: true,
    arrows: false,
  }

  return (
    <div className='product-wrapper'>
      {
        state.isLoading
          ? <p>Loading...</p>
          : state.isError
            ? <Message error={state.error} />
            : products.length
              ? <Slider {...settings}>
                {products.map(product => <ProductItem product={product} key={product.id} />)}
              </Slider>
              : <Message value='нет продуктов' />
      }
    </div>
  )
}

export default Product