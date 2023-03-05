import {FC} from 'react';
import {FetchCallBack} from "../../../../store/api/callBack/callBackType";
import {useDeleteCallBackMutation} from "../../../../store/api/callBack/callBack";
import {ActionLoader} from "../../../../components/UI";
import "./CallsItem.scss";

interface CallsItemPropsType {
    call: FetchCallBack
}

const CallsItem: FC<CallsItemPropsType> = ({call}) => {
    const {full_name, comment, end_time, start_time, phone_number, id} = call
    const [deleteCall, result] = useDeleteCallBackMutation()

    const handleDelete = async () => {
        try {
            await deleteCall(id).unwrap()
            alert('Успешно удалено')
        } catch (e: any) {
            alert(e.data.detail)
        }
    }

    return (
        <>
            <div className="calls__item item">
                <div className="item__info">{full_name}</div>
                <div className="item__phone"><a href={`tel:${phone_number}`}>{phone_number}</a></div>
                <div className="item__time">{start_time.slice(0, 5)} {end_time.slice(0, 5)}</div>
                <div className="item__comment">{comment}</div>
                <div className="item__delete action-delete" onClick={handleDelete}></div>
            </div>

            {result.isLoading && <ActionLoader/>}
        </>
    );
};

export default CallsItem;