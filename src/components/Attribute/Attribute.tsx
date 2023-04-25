import { useTypedSelector } from '@/hooks/useTypedSelector'
import { FC } from 'react'
import './Attribute.scss'
import {
    AttributeAdd, AttributeBody, AttributeEdit,
    AttributeHeader, AttributeVariant
} from './index'

interface AttributeProps {
    id?: number
}

const Attribute: FC<AttributeProps> = ({ id }) => {
    const { categoryId } = useTypedSelector(state => state.categorySlice)
    const propsId = categoryId || id

    return (
        <div className="attribute">
            <AttributeHeader />
            <AttributeBody id={propsId} />
            <AttributeAdd />
            <AttributeEdit />
            <AttributeVariant />
        </div>
    )
}

export default Attribute