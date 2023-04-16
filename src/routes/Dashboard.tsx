import { SideBar, TopBar } from '@/pages/Admin'
import { CategoriesAdd, CategoriesEdit } from '@/pages/Admin/Categories'
import { CountriesAdd, CountriesEdit } from '@/pages/Admin/Countries'
import { ProductsAdd, ProductsEdit } from '@/pages/Admin/Products'
import { UsersAdd, UsersEdit } from '@/pages/Admin/Users'
import { Outlet } from "react-router-dom"

const adminBodyStyle = {
    margin: '0px 40px 0px 310px'
}

const adminStyle = {
    maxWidth: '1920px',
    margin: 'auto'
}

const Dashboard = () => {
    return (
        <div className='admin' style={adminStyle}>
            <SideBar />
            <TopBar />

            <div className="admin-body" style={adminBodyStyle}>
                {<Outlet />}
            </div>

            <UsersAdd />
            <UsersEdit />

            <ProductsAdd />
            <ProductsEdit />

            <CountriesAdd />
            <CountriesEdit />

            <CategoriesAdd />
            <CategoriesEdit />
        </div>
    )
}

export default Dashboard