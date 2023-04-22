import { useActions } from '@/hooks/useActions'
import { FetchAttribute } from '@/models/attributeTypes'
import attributeApi from '@/store/api/attribute'
import clsx from 'clsx'
import { Notify } from 'notiflix'
import { FC } from 'react'
import './AttributeItem.scss'
interface AttributeItemProps {
    attribute: FetchAttribute
}

const AttributeItem: FC<AttributeItemProps> = ({ attribute }) => {
    const { id, attribute_name, variants } = attribute
    const { openAttributeEditModal, openAttributeViewdModal } = useActions()

    const [deleteAttribute, result] = attributeApi.useDeleteAttributeMutation()

    const handleEdit = () => openAttributeEditModal(id)
    const handleView = () => openAttributeViewdModal({ variants: variants, id: id })
    const handleDelete = async () => {
        try {
            await deleteAttribute(id).unwrap()
            Notify.success(`Атрибут успешно удален`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }

        catch (e: any) {
            Notify.failure(`Ошибка при удаление атрибут, статус: ${e.status}`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }
    }

    return (
        <div className='attribute__item item-attribute'>
            <div className="item-attribute__body">
                <div className="item-attribute__name">{attribute_name}</div>
                <div className="item-attribute__variants">
                    <button className={clsx("item-attribute__view", { "item-attribute__disabled": !variants.length })} disabled={!variants.length} onClick={handleView}>
                        {variants.length
                            ?<>
                                <span className="item-attribute__variant">Вариант</span>
                                <span className='icon-view'></span>
                            </>
                            : <div className='item-attribute__empty'>Нет</div>
                        }
                    </button>
                </div>
            </div>

            <div className="item-attribute__actions">
                <div className="item-attribute__edit" onClick={handleEdit}></div>
                <div className="item-attribute__delete" onClick={handleDelete}></div>
            </div>
        </div>
    )
}

export default AttributeItem