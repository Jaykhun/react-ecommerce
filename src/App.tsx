import { Admin } from '@/pages/Admin'
import { Categories } from '@/pages/Admin/Categories'
import { Countries } from '@/pages/Admin/Countries'
import { Products, ProductsDetails } from '@/pages/Admin/Products'
import { Users, UsersDetails } from '@/pages/Admin/Users'
import Dashboard from '@/routes/Dashboard'
import '@/styles/style.scss'
import ScrollToTop from '@/utils/scrollToTop'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path='admin' element={<Dashboard />}>
            <Route index element={<Admin />} />

            <Route path='users' element={<Users />} />
            <Route path='users/:id' element={<UsersDetails />} />

            <Route path='products' element={<Products />} />
            <Route path='products/:id' element={<ProductsDetails />} />


            <Route path='countries' element={<Countries />} />
            <Route path='categories' element={<Categories />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App