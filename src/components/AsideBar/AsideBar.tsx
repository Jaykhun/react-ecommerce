import { Message } from '@/components/UI'
import { FetchProduct } from '@/models/productTypes'
import productApi from '@/store/api/product'
import { calculateDiscount } from '@/utils/calculateDiscount'
import './AsideBar.scss'
import AsideBarItem from './AsideBarItem'

const AsideBar = () => {
  const { data: products = [], isError, error } = productApi.useGetAllProductsQuery()

  const bestProduct = products.find(product => product.quantity > 7 && product.quantity > 20 && product.discount > 1)
  const discountProducts: FetchProduct[] = []

  products.some((product) => {
    if (product.discount > 0) {
      discountProducts.push(product)
    }

    return discountProducts.length === 3
  })

  if(isError) return <Message error={error} formError='Ошибка при загрузке продуктов'/>

  return (
    <div className='asidebar'>
      <div className="asidebar__body">
        <div className="asidebar__best asidebar-best">
          <div className="asidebar-best__header">
            <div className="asidebar-best__title">товар дня</div>
          </div>

          <div className="asidebar-best__body">
            <div className="asidebar-best__img">
              <img src={bestProduct?.images[0].image_path}
                alt={bestProduct?.name} />
            </div>

            <div className="asidebar-best__info">
              <a className="asidebar-best__product">
                {bestProduct?.name}
              </a>

              <div className="asidebar-best__discount">
                <div className="asidebar-best__sale">sale</div>
                <div className="asidebar-best__percent">{bestProduct?.discount} %</div>
              </div>

              <div className="asidebar-best__price">
                <div className="asidebar-best__current-price">
                  {
                    calculateDiscount(Number(bestProduct?.price), Number(bestProduct?.discount))
                  }
                  &#36;
                </div>
                <div className="asidebar-best__past-price">
                  {bestProduct?.price}
                  &#36;</div>
              </div>
            </div>
          </div>
        </div>

        <div className="asidebar__discount asidebar-discount">
          <div className="asidebar-discount__header">
            <div className="asidebar-discount__title">распродажа</div>
          </div>

          <div className="asidebar-discount__body">
            {discountProducts.map(product => <AsideBarItem products={product} key={product.id} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AsideBar