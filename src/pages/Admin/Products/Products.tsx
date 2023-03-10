import {useGetAllProductsQuery} from "../../../store/api/product/productApi";
import {IProduct} from "../../../store/api/product/productTypes";
import {ProductsItem, ProductsForm, ProductsLoader} from "./index";
import {Error, Message} from "../../../components/UI";
import {v4 as keyId} from "uuid"
import "./Products.scss";

const Products = () => {
    const {data, isLoading, error} = useGetAllProductsQuery();
    window.scrollTo(0, 0);

    return (
        <div className="all-products">
            <ProductsForm buttonValue='Добавить'/>

            <div className="all-products__body">
                <div className="all-products__title title">Продукты</div>
                <div className="all-products__content">
                    {
                        isLoading ?
                            <ProductsLoader/>
                            : error
                                ? <Error error={error}/>
                                : data?.length === 0
                                    ? <Message value="нет продуктов"/>
                                    : data?.map((item: IProduct) => <ProductsItem product={item} key={keyId()}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;