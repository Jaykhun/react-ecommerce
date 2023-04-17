import { Loader } from '@/components/UI'
import { FetchCall } from '@/models/callTypes'
import { callApi } from '@/store/api'
import { Notify } from 'notiflix'
import { FC } from 'react'
import './CallsItem.scss'

interface CallsItemProps {
    call: FetchCall
}
const CallsItem: FC<CallsItemProps> = ({ call }) => {
    const { comment, full_name, phone_number, start_time, id } = call
    const [deleteCall, result] = callApi.useDeleteCallMutation()

    const handleDelete = async () => {
        try {
            await deleteCall(id).unwrap()
            Notify.success(`Звонок ${full_name}на успешно удален`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }

        catch (e: any) {
            Notify.failure(`Ошибка при удаление, статус: ${e.status}`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }
    }

    return (
        <>
            <div className='calls__item item-calls'>
                <div className="item-calls__body">
                    <div className="item-calls__fullname">{full_name}</div>
                    <div className="item-calls__comment">{comment}</div>
                    <div className="item-calls__phone">
                        <a href={`tel:${phone_number}`}>{phone_number}</a>
                    </div>
                    <div className="item-calls__time">{start_time}</div>
                </div>

                <div className="item-calls__actions">
                    <div className="item-calls__delete" onClick={handleDelete}></div>
                </div>
            </div>
            {result.isLoading && <Loader isLoading={result.isLoading} />}
        </>
    )
}

export default CallsItem