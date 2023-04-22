import './Attribute.scss'
import { AttributeBody, AttributeHeader } from './index'

const Attribute = () => {
    return (
        <div className="attribute">
            <div className="attribute__title">Атрибуты</div>
            <AttributeHeader />
            <AttributeBody />
        </div>
    )
}

export default Attribute