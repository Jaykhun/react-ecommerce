import { FC, memo } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Alert.scss'

interface AlertProps {
    error?: any,
    success?: string
}

const Alert: FC<AlertProps> = ({ error, success }) => {
    const { status, data } = error

    return (
        <div className="alert">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

export default memo(Alert)