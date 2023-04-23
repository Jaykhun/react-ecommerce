import { ChartTypes } from '@/models/chartTypes'
import { FC } from 'react'
import { Bar } from 'react-chartjs-2'
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

interface BarChartProps {
    data: ChartTypes
}

const BarChart: FC<BarChartProps> = ({ data }) => {
    return (
        <div className='bar-chart'>
            <Bar data={data} height={200} width={700} />
        </div>
    )
}

export default BarChart