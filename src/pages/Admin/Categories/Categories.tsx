import { useGetAllCategoriesQuery } from '../../../store/category/category';
import { Error, Message } from '../../../components/UI';
import { CategoriesForm, CategoriesItem } from './index';
import "./Categories.scss";

const Categories = () => {
    const { data: categories, isLoading, isError, error } = useGetAllCategoriesQuery()

    return (
        <div className='categories'>
            <CategoriesForm />
            <div className="categories__title title">Категории</div>
            <div className="categories__body">
                {isLoading
                    ? <p>Loading</p>
                    : isError
                        ? <Error error={error} />
                        : categories?.length === 0
                            ? <Message value='нет категории' />
                            : categories?.map(category => <CategoriesItem category={category} />)
                }
            </div>
        </div>
    );
};

export default Categories;