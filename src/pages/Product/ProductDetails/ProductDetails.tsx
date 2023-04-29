import Path from '@/components/Path'
import { Message } from '@/components/UI'
import { useServiceActions } from '@/hooks/useServiceActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import attributeApi from '@/store/api/attribute'
import productApi from '@/store/api/product'
import { calcDiscount } from '@/utils/calcDiscount'
import clsx from 'clsx'
import { Notify } from 'notiflix'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import LoaderDetails from './LoaderDetails'
import './ProductDetails.scss'

const ProductDetails = () => {
  const { id } = useParams()
  const { addProduct } = useServiceActions()
  const { products: cartProducts } = useTypedSelector(state => state.userCart)
  const [currentIndex, setCurrentIndex] = useState(0)

  const { data: product, isFetching, isError, error } = productApi.useGetSingleProductQuery(Number(id), { skip: !id })
  const { data: products = [] } = productApi.useGetAllProductsQuery()

  const attribute = attributeApi.useGetSingleAttributeQuery(Number(product?.category.id), { skip: !product?.category.id })

  const isExist = cartProducts.find(product => product.id === Number(id))

  if (isError) return <Message error={error} />
  if (isFetching) return <LoaderDetails />

  const pathHistory = {
    path: String(product?.category.id),
    name: String(product?.category.name)
  }

  const handleAdd = () => {
    product && addProduct({ ...product, count: 1 })
    Notify.success('Продукт добавлен в корзину', {
      clickToClose: true,
      fontSize: '15px',
      zindex: 9999
    })
  }

  const handleFind = () => {
    const index = products.findIndex(product => product.id === Number(id))
    if (index > 0) {
      setCurrentIndex(index)
    }
  }

  return (
    <div className='product'>
      <div className="product__path">
        <Path pathHistory={pathHistory} currentPage={product?.name} />
      </div>
      <div className="product__title">{product?.name}</div>
      <div className="product__body">
        <div className="product__content">
          <div className="product__control">
            <div className="product__sale">{product?.quantity ? 'sale' : 'not sale'}</div>
            <div className="product__price">
              <div className="product__price-current">
                {product?.discount
                  ? calcDiscount(product?.price, product?.discount)
                  : product?.price
                } $
              </div>

              {!!product?.discount
                && <div className="product__price-past">
                  {product?.price} $
                </div>
              }
            </div>
            <button className={clsx('product__buy',
              { 'product__disabled': !product?.quantity || !!isExist })}
              disabled={!product?.quantity || !!isExist}
              onClick={handleAdd}
            >
              В карзину
            </button>
          </div>

          <div className="product__info">
            <div className="product__category">
              <span className='product__txt'>Категории</span>
              <Link to={`/product/category/${product?.category.id}`}><span>{product?.category.name}</span></Link>
            </div>
            <div className="product__desc">
              <span className='product__txt'>Описание </span>
              <span>{product?.description}</span>
            </div>
            {attribute.isLoading
              ? <Message formError='Идет загрузка атрибутов...' />
              : attribute.isError ?
                <Message error={attribute.error} formError='Не удалось загузить атрибутов' />
                : <div className="product__attribute attribute-product">
                  <div className="attribute-product__name">
                    <span className='product__txt'>Атрибут</span>
                    <span>{attribute.data?.attribute_name}</span>
                  </div>

                  {attribute.data?.variants.length
                    ? <div className="attribute-product__variants">
                      <span className='product__txt'>Варианты</span>

                      {attribute.data?.variants.map(variant =>
                        <div className='attribute-product__variant' key={variant.id}>{variant.value}</div>)
                      }
                    </div>
                    : ''
                  }
                </div>
            }
          </div>
        </div>

        <div className="product__img">
          <img src={product?.images[0].image_path} alt={product?.name} />
        </div>
      </div>

      <div className="product__footer">
        <div className="product__nav">
          <Link to={`/product/${Number(products[currentIndex - 1]?.id)}`} className="product__previous" onClick={handleFind}>
            Предыдущий
          </Link>

          <Link to={`/product/${Number(products[currentIndex + 1]?.id)}`} className="product__next" onClick={handleFind}>
            Следующий
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails