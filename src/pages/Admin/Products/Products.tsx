import {useAddProductMutation, useGetAllProductsQuery} from "../../../store/product/productApi";
import {IProduct} from "../../../store/product/productTypes";
import {ProductsItem, ProductsForm, ProductsLoader} from "./index";
import {Error} from "../../../components/UI";
import {v4 as keyId} from "uuid"
import "./Products.scss";

const Products = () => {
    const {data, isLoading, error} = useGetAllProductsQuery();
    const [addProduct] = useAddProductMutation()

    return (
        <div className="all-products">
            <ProductsForm action={addProduct} buttonValue='Добавить'/>

            <div className="all-products__body">
                <div className="all-products__title title">Продукты</div>
                <div className="all-products__content">
                    {
                        isLoading ?
                            <ProductsLoader/>
                            : error ?
                                <Error error={error}/>
                                : <>
                                    {data?.map((item: IProduct) => <ProductsItem product={item} key={keyId()}/>)}
                                </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;