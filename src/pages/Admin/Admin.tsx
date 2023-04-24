import { BarChart, LineChart } from '@/components/Charts'
import { ChartTypes } from '@/models/chartTypes'
import { orderApi } from '@/store/api/order'
import userApi from '@/store/api/user'
import './Admin.scss'

const Admin = () => {
    const { data: orders = [] } = orderApi.useGetAllOrdersQuery()
    const { data: users = [] } = userApi.useGetAllUsersQuery()

    const barData: ChartTypes = {
        labels: orders.map(order => String(order.id)),
        datasets: [{
            label: 'Заказы',
            data: orders.map(order => order.user_id),
            backgroundColor: ['red', 'black']
        }]
    }

    const lineData: ChartTypes = {
        labels: users.map(user => String(user.id)),
        datasets: [{
            label: 'Пользователи',
            data: users.map(user => user.user_detail.id),
            borderColor: '#0003',
            backgroundColor: ['red', 'black']
        }]
    }

    return (
        <div className='admin'>
            <div className="admin__title">Главная панель</div>
            <div className="admin__charts">
                <BarChart data={barData} />
                <LineChart data={lineData} />
            </div>
        </div>
    )
}

export default Admin