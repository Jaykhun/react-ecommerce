import { Message } from '@/components/UI'
import attributeApi from '@/store/api/attribute'
import { FC } from 'react'
import './Attribute.scss'
import AttributeItem from './AttributeItem'

interface AttributeBodyProps {
    id?: number
}

const AttributeBody: FC<AttributeBodyProps> = ({id}) => {
    const { data: attributes, isFetching, isError, error } = attributeApi.useGetCategoryAttributesQuery(Number(id), {skip: !id})

    return (
        <div className="attribute__body">
            {
                isFetching
                    ? <Message formError='Идет загрузка атрибутов...' />
                    : isError
                        ? <Message error={error} formError='Не удалось загузить атрибутов' />
                        : attributes?.length
                            ? attributes.map(attribute => <AttributeItem attribute={attribute} key={attribute.id} />)
                            : <Message error={error} value='нет аттрибутов' />
            }
        </div>
    )
}

export default AttributeBody