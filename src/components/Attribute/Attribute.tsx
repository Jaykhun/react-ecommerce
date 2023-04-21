import { Message } from '@/components/UI'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import attributeApi from '@/store/api/attribute'
import './Attribute.scss'
import AttributeBody from './AttributeBody'

const Attribute = () => {
    const { categoryId } = useTypedSelector(state => state.categorySlice)
    const { data: attribute, isFetching, isError, error } = attributeApi.useGetCategoryAttributesQuery(categoryId)

    return (
        <div className="attribute">
            {
                isFetching
                    ? <Message formError='Идет загрузка атрибутов...' />
                    : isError
                        ? <Message error={error} formError='Не удалось загузить атрибутов' />
                        : <AttributeBody attribute={attribute} />
            }
        </div>
    )
}

export default Attribute