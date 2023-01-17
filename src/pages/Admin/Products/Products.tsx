import {useGetAllProductsQuery} from "../../../store/product/productApi";
import {ProductsItem, ProductsForm} from "./index";
import "./Products.scss"
import {v4 as keyId} from "uuid"
import ProductsLoader from "./ProductsLoader/ProductsLoader";
import Error from "../../../components/UI/Error";

const Products = () => {
    const {data, isLoading, error} = useGetAllProductsQuery();

    return (
        <div className="all-products">
            <div className="all-products__header">
                <ProductsForm/>
            </div>

            <div className="all-products__body">
                <div className="all-products__title title">Products</div>
                <div className="all-products__content">
                    {
                        isLoading ?
                            <ProductsLoader/>
                            : error ?
                                <Error/>
                                : <>
                                    {data?.map((item: any) => <ProductsItem product={item} key={keyId()}/>)}
                                </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;