import ScrollToTop from '@/helpers/scrollToTop'
import AdminAccess from '@/hoc/AdminAccess'
import { Admin } from '@/pages/Admin'
import { Calls } from '@/pages/Admin/Calls'
import { Categories, CategoriesDetails } from '@/pages/Admin/Categories'
import { Countries } from '@/pages/Admin/Countries'
import { OrderStatus } from '@/pages/Admin/OrderStatus'
import { Orders } from '@/pages/Admin/Orders'
import { Products, ProductsDetails } from '@/pages/Admin/Products'
import { Users, UsersDetails } from '@/pages/Admin/Users'
import Home from '@/pages/Home'
import LogIn from '@/pages/LogIn'
import { ProductDetails, ProductSorted } from '@/pages/Product'
import Registration from '@/pages/Registration'
import Dashboard from '@/routes/Dashboard'
import Layout from '@/routes/Layout'
import '@/styles/style.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<AdminAccess />}>
          <Route path='admin' element={<Dashboard />}>
            <Route index element={<Admin />} />

            <Route path='users' element={<Users />} />
            <Route path='users/:id' element={<UsersDetails />} />

            <Route path='products' element={<Products />} />
            <Route path='products/:id' element={<ProductsDetails />} />

            <Route path='categories' element={<Categories />} />
            <Route path='categories/:id' element={<CategoriesDetails />} />

            <Route path='countries' element={<Countries />} />
            <Route path='orders' element={<Orders />} />
            <Route path='status' element={<OrderStatus />} />
            <Route path='calls' element={<Calls />} />
          </Route>
        </Route>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<LogIn />} />
          <Route path='registration' element={<Registration />} />

          <Route path='product/:id' element={<ProductDetails />} />
          <Route path='product/category/:id' element={<ProductSorted />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App