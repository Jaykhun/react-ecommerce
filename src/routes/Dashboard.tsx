import { Outlet } from "react-router-dom"

const Dashboard = () => {
    return (
        <div>{<Outlet />}</div>
    )
}

export default Dashboard