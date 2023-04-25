import './Categories.scss'
import { CategoriesAdd, CategoriesBody, CategoriesEdit, CategoriesHeader } from './index'

const Categories = () => {
    return (
        <div className='categories'>
            <CategoriesHeader />
            <CategoriesBody />
            <CategoriesAdd />
            <CategoriesEdit />
        </div>
    )
}

export default Categories