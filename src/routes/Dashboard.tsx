import { SideBar, TopBar } from '@/pages/Admin'
import { UsersEdit } from '@/pages/Admin/Users'
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

            <UsersEdit/>
        </div>
    )
}

export default Dashboard