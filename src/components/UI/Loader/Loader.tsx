import { FC, useRef } from 'react'
import { Rings } from 'react-loader-spinner'
import { CSSTransition } from 'react-transition-group'
import './Loader.scss'

interface LoaderType {
    isLoading: boolean
}

const Loader: FC<LoaderType> = ({ isLoading }) => {
    const nodeRef = useRef(null)

    return (
        <CSSTransition
            in={isLoading}
            nodeRef={nodeRef}
            timeout={300}
            classNames="loader"
            unmountOnExit
            onEnter={() => !isLoading}
            onExited={() => isLoading}
        >
            <div className='loader' ref={nodeRef}>
                <div className="loader__spinner">
                    <Rings
                        height="100"
                        width="100"
                        color="#e92e2e"
                        radius="6"
                        visible={true}
                        ariaLabel="rings-loading"
                    />
                </div>
            </div>
        </CSSTransition>

    )
}

export default Loader