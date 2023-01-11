import React from 'react';
import "./AllProducts.scss"
import SelectComponent from "../../../components/UI/Select/SelectComponent";
import UploadFile from "./UploadFile";
import {useGetAllProductsQuery} from "../../../store/product/productApi";
import AllProductsItem from "./AllProductsItem/AllProductsItem";

const AllProducts = () => {
    const {data, isLoading, error} = useGetAllProductsQuery();
    console.log(data)
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
                {
                    isLoading ? 'Loading' : error ? `error ${error}` :
                        <div>{data?.map((item: any) => <AllProductsItem product={item}/>)}</div>
                }
            </div>
        </div>
    );
};

export default AllProducts;