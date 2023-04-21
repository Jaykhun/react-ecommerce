import { useActions } from '@/hooks/useActions'
import { FetchAttribute } from '@/models/attributeTypes'
import attributeApi from '@/store/api/attribute'
import clsx from 'clsx'
import { Notify } from 'notiflix'
import { FC } from 'react'

interface AttributeBodyProps {
    attribute?: FetchAttribute[]
}

const AttributeBody: FC<AttributeBodyProps> = ({ attribute }) => {
    const { openAttributeAddModal } = useActions()
    const handleAdd = () => openAttributeAddModal()
    const [deleteAttribute, resullt] = attributeApi.useDeleteAttributeMutation()

    const handleDelete = async (id: number) => {
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
        <div className="attribute__body">
            <div className="attribute__content">
                {
                    attribute?.length
                        ?
                        attribute?.map(item =>
                            <div className='attribute__item' key={item.id}>
                                <span className="attribute__txt">Атрибут:</span>
                                <div className='attribute__name'>{item.attribute_name}</div>

                                <div className="attribute__variants">
                                    <span className="attribute__txt">Варианты:</span>
                                    {item.variants.length
                                        ? item.variants.map(variant =>
                                            <div className='attribute__name' key={variant.id}>
                                                {variant.value}
                                            </div>)
                                        : <div className='attribute__empty'>Пусто</div>
                                    }
                                </div>
                                <div className="attribute__delete" onClick={() => handleDelete(item.id)}>удалить</div>
                            </div>
                        )
                        : <div className='attribute__item'>
                            <span className="attribute__txt">Атрибут:</span>
                            <div className='attribute__empty'>Пусто</div>
                        </div>
                }
            </div>

            <div className="attribute__actions">
                <button className="attribute__add" onClick={handleAdd}>Добавить атрибут</button>
                <button
                    className={clsx('attribute__edit', { 'disabled': !attribute?.length })}
                    disabled={!attribute?.length}
                >
                    Изменить атрибут
                </button>
            </div>
        </div>
    )
}

export default AttributeBody