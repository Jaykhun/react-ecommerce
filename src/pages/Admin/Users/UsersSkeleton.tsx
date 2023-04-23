import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const UsersSkeleton = () => {
    return (
        <div className='users__skeleton'>
            <Skeleton height={70} borderRadius={6} />
        </div>
    )
}

export default UsersSkeleton