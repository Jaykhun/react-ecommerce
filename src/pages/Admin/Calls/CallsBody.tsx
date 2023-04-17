import { Loader, Message } from '@/components/UI'
import { callApi } from '@/store/api'
import CallsItem from './CallsItem'

const CallsBody = () => {
    const { data: calls, isFetching, isError, error } = callApi.useGetAllCallsQuery()

    return (
        <div className='calls__body'>
            {
                isFetching
                    ? <Loader isLoading={isFetching} />
                    : isError
                        ? <Message error={error} />
                        : calls?.length
                            ? calls?.map(call => <CallsItem call={call} key={call.id} />)
                            : <Message value='нет звонков' />
            }
        </div>
    )
}

export default CallsBody