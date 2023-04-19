import clsx from 'clsx'
import { FC } from 'react'
import './Message.scss'

interface MessageProps {
    value?: string,
    error?: any,
    formError?: string
}

const Message: FC<MessageProps> = ({ value, error, formError }) => {

    const errorMessage = `${error?.status}  ${error?.data?.detail}`

    return (
        <div className={clsx({ 'message-text': value || error, 'form-error': formError })}>
            {value && value} {error && errorMessage} {formError && formError}
        </div>
    )
}

export default Message