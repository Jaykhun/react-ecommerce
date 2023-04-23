import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductsSkeleton = () => {
    return (
        <div className='products__skeleton'>
            <Skeleton height={100} borderRadius={6} />
        </div>
    )
}

export default ProductsSkeleton