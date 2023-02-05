import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout, LayoutWithoutSidebar, Dashboard} from "./routes";
import {Admin, Products, Users, Orders, Countries, Categories} from "./pages/Admin";
import {Home} from "./pages/Home";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import {ProductDetails} from "./pages/Product";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="product" element={<ProductDetails/>}/>
                    <Route path="product/:id" element={<ProductDetails/>}/>
                </Route>

                <Route path="/" element={<LayoutWithoutSidebar/>}>
                    <Route path="cart" element={<Cart/>}/>
                </Route>

                <Route path="admin" element={<Dashboard/>}>
                    <Route index element={<Admin/>}/>
                    <Route path="products" element={<Products/>}/>
                    <Route path="users" element={<Users/>}/>
                    <Route path="orders" element={<Orders/>}/>
                    <Route path="countries" element={<Countries/>}/>
                    <Route path="categories" element={<Categories/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;