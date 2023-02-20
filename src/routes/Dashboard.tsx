import {Outlet} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {ProductsEdit} from "../pages/Admin/Products";
import {UsersEdit} from "../pages/Admin/Users";
import {Sidebar, Topbar} from "../pages/Admin";
import {CountriesEdit} from "../pages/Admin/Countries";
import {CategoriesEdit} from "../pages/Admin/Categories";

const Dashboard = () => {
    const {isAdminMenuOpen} = useTypedSelector(state => state.admin)

    return (
        <>
            <div className="wrapper">
                <div className="admin">
                    <div className={`content ${isAdminMenuOpen ? "" : "active-content"}`}>
                        <Topbar/>
                        <main className="main">
                            <Outlet/>
                        </main>
                    </div>
                    <Sidebar/>
                </div>
            </div>
            <ProductsEdit/>
            <UsersEdit/>
            <CountriesEdit/>
            <CategoriesEdit/>
        </>
    );
};

export default Dashboard;