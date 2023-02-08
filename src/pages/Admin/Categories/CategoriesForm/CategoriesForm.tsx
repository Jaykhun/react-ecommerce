import {FC, useCallback, useId} from "react"
import {
    useAddCategoryMutation,
    useGetAllCategoriesQuery, useGetSingleCategoryQuery,
    useUpdateCategoryMutation
} from "../../../../store/category/category"
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message/dist";
import {ICategory} from "../../../../store/category/categoryTypes";
import {Select, InputError} from "../../../../components/UI";
import "./CategoriesForm.scss"

interface CategoriesFormPropsType {
    buttonValue: string,
    id?: number
}

const CategoriesForm: FC<CategoriesFormPropsType> = ({buttonValue, id}) => {
    const {data: categories} = useGetAllCategoriesQuery()
    const {data: singleCategory, isSuccess, isLoading: categoryLoading, error: categoryError, isError: IsCategoryError} = useGetSingleCategoryQuery(id, {skip: !id})
    const [addCategory] = useAddCategoryMutation()
    const [updateCategory] = useUpdateCategoryMutation()

    const name = useId()
    const category = useId()

    const initialVales = {
        name: isSuccess ? singleCategory.name : '',
        children_category: isSuccess ? singleCategory.children_category : [],
        parent_category: isSuccess ? singleCategory.parent_category : ''
    }

    console.log(categoryError)

    const {
        register,
        formState: {errors, isDirty},
        handleSubmit,
        reset,
        control
    } = useForm<ICategory>({mode: 'onBlur', defaultValues: initialVales})

    const onSubmit: SubmitHandler<ICategory> = useCallback((data) => {
        console.log(data, 'data')

        singleCategory
            ? updateCategory(data)
            : addCategory(data)
        reset()
    }, [])

    return (
        <form className="categories__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="categories__name">
                <label htmlFor={name} className="input-text">название категории</label>
                <input type="text" id={name}
                       className="input-style"
                       {...register(
                           'name',
                           {
                               required: 'Поле обязательно к заполнению',
                               minLength: {value: 5, message: 'Минимум 5 символов'},
                               maxLength: {value: 30, message: 'Максимум 30 символов'}
                           }
                       )}
                />
                <ErrorMessage name={'name'}
                              errors={errors}
                              render={({message}) => <InputError message={message}/>}
                />
            </div>

            <div className="categories__category">
                <Controller
                    control={control}
                    name={'children_category'}
                    rules={
                        {required: 'Поле обязательно к заполнению'}
                    }
                    render={({field, fieldState: {error}}) =>
                        <Select
                            id={category}
                            data={categories}
                            isLoading={categoryLoading}
                            isError={IsCategoryError}
                            error={categoryError}
                            multi={false}
                            field={field}
                            errors={error}
                        />
                    }
                />

                <ErrorMessage name={'children_category'}
                              errors={errors}
                              render={({message}) => <InputError message={message}/>}
                />
            </div>

            {singleCategory ? <button disabled={!isDirty}
                                      className={`btn ${isDirty ? 'r-btn w-opacity' : 'error-btn'} form__submit`}>
                    {buttonValue}</button>
                : <button className={`btn r-btn w-opacity form__submit categories__submit`}>{buttonValue}</button>
            }
        </form>
    )
}

export default CategoriesForm