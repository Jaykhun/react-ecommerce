import attributeApi from '@/store/api/attribute'
import productApi from '@/store/api/product'
import { calculateDiscount } from '@/utils/calculateDiscount'
import clsx from 'clsx'
import { Link, useParams } from 'react-router-dom'
import LoaderDetails from './LoaderDetails'
import './ProductDetails.scss'

const ProductDetails = () => {
  const { id } = useParams()
  const { data: product, isLoading, isError, error } = productApi.useGetSingleProductQuery(Number(id), { skip: !id })
  const attribute = attributeApi.useGetSingleAttributeQuery(Number(product?.category.id), { skip: !product?.category.id })

  if (isLoading) return <LoaderDetails />

  return (
    <div className='product'>
      <div className="product__title">{product?.name}</div>
      <div className="product__body">
        <div className="product__content">
          <div className="product__control">
            <div className="product__sale">{product?.quantity ? 'sale' : 'not sale'}</div>
            <div className="product__price">
              <div className="product__price-current">
                {product?.discount
                  ? calculateDiscount(product?.price, product?.discount)
                  : product?.price
                } $
              </div>

              {!!product?.discount
                && <div className="product__price-past">
                  {product?.price} $
                </div>
              }
            </div>
            <button className={
              clsx('product__buy', {
                'product__disabled': !product?.quantity
              })}
              disabled={!product?.quantity}>
              В карзину
            </button>
          </div>

          <div className="product__info">
            <div className="product__category">{product?.category.name}</div>
            <div className="product__desc">{product?.description}</div>
            <div className="product__attribute attribute-product">
              <div className="attribute-product__name">
                {attribute.data?.attribute_name}
              </div>

              <div className="attribute-product__variants">
                {attribute.data?.variants.map(variant =>
                  <div className='attribute-product__variant' key={variant.id}>{variant.value}</div>)
                }
              </div>
            </div>
          </div>
        </div>

        <div className="product__img">
          <img src={product?.images[0].image_path} alt={product?.name} />
        </div>
      </div>

      <div className="product__footer">
        <div className="product__nav">
          <Link to={`/product/${Number(id) - 1}`} className="product__previous">
            Предыдущий
          </Link>

          <Link to={`/product/${Number(id) + 1}`} className="product__next">
            Предыдущий
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails