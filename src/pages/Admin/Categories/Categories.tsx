import { useGetAllCategoriesQuery } from '../../../store/api/category/categoryApi';
import { Error, Message } from '../../../components/UI';
import { CategoriesForm, CategoriesItem, CategoriesLoader } from './index';
import "./Categories.scss";

const Categories = () => {
    const { data: categories, isLoading, isError, error } = useGetAllCategoriesQuery()

    return (
        <div className='categories'>
            <CategoriesForm buttonValue='Добавить'/>
            <div className="categories__title title">Категории</div>
            <div className="categories__body">
                {isLoading
                    ? <CategoriesLoader/>
                    : isError
                        ? <Error error={error} />
                        : categories?.length === 0
                            ? <Message value='нет категории' />
                            : categories?.map(category => <CategoriesItem category={category} key={category.id}/>)
                }
            </div>
        </div>
    );
};

export default Categories;