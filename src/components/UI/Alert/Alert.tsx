import { FC } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Alert.scss'

interface AlertProps {
    error?: any,
    success?: string
}

const Alert: FC<AlertProps> = ({ error, success }) => {
    const { status, data } = error

    success && toast.success(success, { theme: "light" })
    error && toast.error(`${status} ${data.detail}`, { theme: "dark" })

    return (
        <div className="alert">
            <ToastContainer
                position="top-right"
                autoClose={5000}
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

export default Alert