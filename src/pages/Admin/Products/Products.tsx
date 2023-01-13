import React from 'react';
import "./Products.scss"
import SelectComponent from "../../../components/UI/Select";
import UploadFile from "./UploadFile";
import {useGetAllProductsQuery} from "../../../store/product/productApi";
import ProductsItem from "./ProductsItem";

const Products = () => {
    const {data, isLoading, error} = useGetAllProductsQuery();
    return (
        <div className="all-products">
            <div className="all-products__header">
                <form action="#" className="all-products__form form">
                    <div className="form__top">
                        <div className="form__productName">
                            <label htmlFor="productName" className="input-text">название продукта</label>
                            <input type="text" className="input-style" id="productName"/>
                        </div>

                        <div className="form__price">
                            <div className="price">
                                <label htmlFor="productPrice" className="input-text">цена</label>
                                <input type="number" className="input-style" id="productPrice"/>
                            </div>

                            <div className="discount">
                                <label htmlFor="productDiscount" className="input-text">скидка</label>
                                <input type="number" className="input-style" id="productDiscount"/>
                            </div>
                        </div>
                    </div>

                    <div className="form__file">
                        <SelectComponent/>
                        <UploadFile/>
                    </div>

                    <div>
                        <div className="form__item">
                            <label htmlFor="productDescription" className="input-text">описание продукта</label>
                            <textarea id="productDescription" className="input-style"></textarea>
                        </div>
                    </div>

                    <button className="btn r-btn w-opacity form__submit">Добавить</button>
                </form>
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