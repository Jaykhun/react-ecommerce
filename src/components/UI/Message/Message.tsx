import { FC } from 'react'
import clsx from 'clsx'
import './Message.scss'

interface MessageProps {
    value?: string,
    error?: any,
    formError?: string
}

const Message: FC<MessageProps> = ({ value, error, formError }) => {
    return (
        <div className={clsx({ 'message-text': value || error, 'form-error': formError })}>
            {value && value} {error && error.status} {formError && formError}
        </div>
    )
}

export default Message