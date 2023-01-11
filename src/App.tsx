import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LayoutWithoutSidebar from "./pages/LayoutWithoutSidebar";
import AdminLayout from "./pages/AdminLayout";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import {Admin, AllProducts, AllUsers, Orders} from "./pages/Admin";
import ProductItem from "./pages/Product/ProductItem/ProductItem";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="product" element={<ProductItem/>}/>
                </Route>

                <Route path="/" element={<LayoutWithoutSidebar/>}>
                    <Route path="cart" element={<Cart/>}/>
                </Route>

                <Route path="admin" element={<AdminLayout/>}>
                    <Route index element={<Admin/>}/>
                    <Route path="/admin/products" element={<AllProducts/>}/>
                    <Route path="/admin/users" element={<AllUsers/>}/>
                    <Route path="/admin/orders" element={<Orders/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;