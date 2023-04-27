import { FC } from 'react'
import { Link } from 'react-router-dom'
import './Path.scss'

interface PathHistory {
    path: string,
    name: string
}

interface PathProps {
    pathHistory?: PathHistory,
    currentPage?: string
}

const Path: FC<PathProps> = ({ pathHistory, currentPage }) => {
    return (
        <div className='path'>
            <Link to={'/'} className="path__history">Главаня</Link>
            <Link className='path__history' to={String(pathHistory?.path)}>{pathHistory?.name}</Link>
            <div className="path__current">{currentPage}</div>
        </div>
    )
}

export default Path