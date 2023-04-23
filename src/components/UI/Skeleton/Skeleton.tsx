import { FC, useRef } from 'react'
import Loader from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { CSSTransition } from 'react-transition-group'
import './Skeleton.scss'

interface SkeletonProps {
    isLoading: boolean
}

const Skeleton: FC<SkeletonProps> = ({ isLoading }) => {
    const nodeRef = useRef(null)

    return (
        <CSSTransition
            in={isLoading}
            nodeRef={nodeRef}
            timeout={300}
            classNames="skeleton"
            unmountOnExit
            onEnter={() => !isLoading}
            onExited={() => isLoading}
        >
            <div className='skeleton' ref={nodeRef}>
                <Loader height={55} borderRadius={6} />
            </div>
        </CSSTransition>
    )
}

export default Skeleton