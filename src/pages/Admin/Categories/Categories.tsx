import './Categories.scss'
import { CategoriesBody, CategoriesHeader } from './index'

const Categories = () => {
    return (
        <div className='categories'>
            <CategoriesHeader />
            <CategoriesBody />
        </div>
    )
}

export default Categories