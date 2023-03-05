import React, { FC } from 'react'
import "./Message.scss"

interface MessagePropsType {
    value: string
}

const Message: FC<MessagePropsType> = ({ value }) => {
    return (
        <div className='message' style={{margin: "20px"}}>{value}</div>
    )
}

export default Message;
