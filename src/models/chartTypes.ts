interface ChartDataType {
    label: string,
    data: number[],
    backgroundColor?: string[],
    stack?: string,
    borderColor?: string
}

export interface ChartTypes {
    labels: string[],
    datasets: ChartDataType[]
}