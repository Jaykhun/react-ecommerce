import { FC } from 'react'
import { ChartTypes } from '@/models/chartTypes'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

interface LineChartProps {
    data: ChartTypes
}

const LineChart: FC<LineChartProps> = ({ data }) => {
    return (
        <div className='line-chart'>
            <Line data={data} width={700} />
        </div>
    )
}

export default LineChart