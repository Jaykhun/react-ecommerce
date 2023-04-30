import { Attribute } from '@/components/Attribute'
import { Loader, Message } from '@/components/UI'
import productApi from '@/store/api/product'
import { useParams } from 'react-router-dom'
import './ProductsDetails.scss'

const ProductsDetails = () => {
    const { id } = useParams()
    const { data: product, isLoading, isError, error } = productApi.useGetSingleProductQuery(Number(id))

    return (
        <div className='products-details'>
            {
                isLoading
                    ? <Loader isLoading={isLoading} />
                    : isError
                        ? <Message error={error} />
                        : <>
                            <div className="products-details__title">
                                Информация о продукте
                            </div>
                            <div className="products-details__body">
                                <div className="products-details__info products-info">
                                    <div className="products-details__img">
                                        <img src={product?.images[0].image_path} alt={product?.name} />
                                    </div>

                                    <div className="products-info__body">
                                        <div className="products-info__name">
                                            <span className="products-details__txt">название:</span>
                                            <span>{product?.name}</span>
                                        </div>
                                        <div className="products-info__categories">
                                            <span className="products-details__txt">категория:</span>
                                            <span>{product?.category.name}</span>
                                        </div>

                                        <div className="products-info__categories">
                                            <span className="products-details__txt">Родительский категории:</span>
                                            <span>{product?.category.parent_category?.name}</span>
                                        </div>

                                        {
                                            !!product?.category.children_category.length &&
                                            <div className="products-info__subcategories">
                                                <span className="products-details__txt">Дочерний категории:</span>
                                                <span>
                                                    {product?.category.children_category.map(c =>
                                                        <div className="products-details-category__children" key={c.id}>{c.name}</div>
                                                    )}
                                                </span>
                                            </div>
                                        }
                                    </div>
                                </div>

                                <div className="products-details__price">
                                    <span className="products-details__txt">цена:</span>
                                    <span>{product?.price} $</span>
                                </div>

                                <div className="products-details__desc">
                                    <span className="products-details__txt">описание:</span>
                                    <span>{product?.description}</span>
                                </div>

                                <div className="products-details__quantity">
                                    <span className="products-details__txt">количество:</span>
                                    <span>{product?.quantity}</span>
                                </div>

                                <div className="products-details__discount">
                                    <span className="products-details__txt">скидка:</span>
                                    <span>{product?.discount} %</span>
                                </div>

                                <Attribute id={Number(product?.category.id)} />
                            </div>
                        </>
            }
        </div>
    )
}

export default ProductsDetails