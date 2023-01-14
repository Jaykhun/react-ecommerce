import {useGetAllProductsQuery} from "../../../store/product/productApi";
import {ProductsItem, AddProductsForm} from "./index";
import "./Products.scss"

const Products = () => {
    const {data, isLoading, error} = useGetAllProductsQuery();

    return (
        <div className="all-products">
            <div className="all-products__header">
                <AddProductsForm/>
            </div>

            <div className="all-products__body">
                <div className="all-products__title title">Products</div>
                <div className="all-products__content">
                    {
                        isLoading ?
                            'Loading'
                            : error ?
                                `error ${error}`
                                : <>{data?.map((item: any) => <ProductsItem product={item} key={item.title}/>)}</>
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;