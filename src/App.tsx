import { BrowserRouter, Route, Routes } from "react-router-dom"
import RequireAdmin from "./hoc/RequireAdmin"
import { Admin, Categories, Countries, Orders, Products, Users } from "./pages/Admin"
import Cart from "./pages/Cart"
import { Home } from "./pages/Home"
import Login from './pages/Login'
import NotFound from "./pages/NotFound"
import { Product, ProductDetails, ProductSorted } from "./pages/Product"
import Register from "./pages/Register"
import { AdminLayout, Layout, LayoutWithoutSidebar } from "./routes"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="register" element={<Register />} />
                    <Route path="*" element={<NotFound />} />
                </Route>

                <Route path="/" element={<Layout />}>
                    <Route index element={<Product />} />
                    <Route path="product/:id" element={<ProductDetails />} />
                    <Route path="product/category/:id" element={<ProductSorted />} />
                    <Route path="*" element={<NotFound />} />
                </Route>

                <Route path="/" element={<LayoutWithoutSidebar />}>
                    <Route path="cart" element={<Cart />} />
                </Route>

                <Route path='login' element={<Login />} />

                <Route element={<RequireAdmin />}>
                    <Route path="admin" element={<AdminLayout />}>
                        <Route index element={<Admin />} />
                        <Route path="products" element={<Products />} />
                        <Route path="users" element={<Users />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="countries" element={<Countries />} />
                        <Route path="categories" element={<Categories />} />
                    </Route>
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App