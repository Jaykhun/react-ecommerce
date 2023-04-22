import { Message } from '@/components/UI'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import attributeApi from '@/store/api/attribute'
import './Attribute.scss'
import AttributeItem from './AttributeItem'

const AttributeBody = () => {
    const { categoryId } = useTypedSelector(state => state.categorySlice)
    const { data: attributes, isFetching, isError, error } = attributeApi.useGetCategoryAttributesQuery(categoryId)

    return (
        <div className="attribute__body">
            {
                isFetching
                    ? <Message formError='Идет загрузка атрибутов...' />
                    : isError
                        ? <Message error={error} formError='Не удалось загузить атрибутов' />
                        : attributes?.length
                            ? attributes.map(attribute => <AttributeItem attribute={attribute} key={attribute.id} />)
                            : <Message error={error} value='нет аттрибутов'/>
            }
        </div>
    )
}

export default AttributeBody