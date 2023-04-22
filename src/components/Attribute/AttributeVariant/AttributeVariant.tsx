import { Modal } from '@/components/UI'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import attributeApi from '@/store/api/attribute'
import { Notify } from 'notiflix'
import './AttributeVariant.scss'

const AttributeVariant = () => {
    const { closeAttributeViewModal } = useActions()
    const { variants, isOpenViewModal, attributeId } = useTypedSelector(state => state.attributeSlice)
    const [deleteAttributeVariant, result] = attributeApi.useDeleteAttributeVariantMutation()

    const modalState = {
        isLoading: result.isLoading,
        isError: result.isError,
        error: result.error
    }

    const handleDelete = async (variantId: number) => {
        try {
            await deleteAttributeVariant({ variantId: variantId, attributeId: attributeId }).unwrap()
            Notify.success(`Вариант успешно удален`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }

        catch (e: any) {
            Notify.failure(`Ошибка при удаление вариант, статус: ${e.status}`, {
                clickToClose: true,
                fontSize: '15px',
                zindex: 9999
            })
        }
    }

    return (
        <Modal isOpen={isOpenViewModal} state={modalState} handleClose={closeAttributeViewModal}>
            <div className='attribute-variants'>
                <div className="attribute-variants__body">
                    <div className="attribute-variants__title">Варианты</div>
                    {variants.map(variant =>
                        <div className="attribute-variants__item" key={variant.id}>
                            <div className="attribute-variants__name">{variant.value}</div>
                            <div className="attribute-variants__delete" onClick={() => handleDelete(variant.id)}></div>
                        </div>)
                    }
                </div>
            </div>
        </Modal>
    )
}

export default AttributeVariant