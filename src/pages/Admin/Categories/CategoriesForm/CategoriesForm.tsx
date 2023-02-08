import { useId } from "react"
import { useGetAllCategoriesQuery } from "../../../../store/category/category"
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message/dist";
import { ICategory, ChildrenCategory } from "../../../../store/category/categoryTypes";
import { Select, InputError } from "../../../../components/UI";
import "./CategoriesForm.scss"

const CategoriesForm = () => {
    const { data: categories } = useGetAllCategoriesQuery()
    const name = useId()
    const category = useId()

    const initialVales = {
        name: '',
        children_category: [],
        parent_category: ''
    }

    const {
        register,
        formState: { errors, isDirty },
        handleSubmit,
        reset,
        control
    } = useForm<ICategory>({ mode: 'onBlur', defaultValues: initialVales })

    const onSubmit: SubmitHandler<ICategory> = (data) => {
        console.log(data, 'data')

    }

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
                            minLength: { value: 5, message: 'Минимум 5 символов' },
                            maxLength: { value: 30, message: 'Максимум 30 символов' }
                        }
                    )}
                />
                <ErrorMessage name={'name'}
                    errors={errors}
                    render={({ message }) => <InputError message={message} />}
                />
            </div>

            <div className="categories__category">
                <Controller
                    control={control}
                    name={'children_category'}
                    rules={
                        { required: 'Поле обязательно к заполнению' }
                    }
                    render={({ field, fieldState: { error } }) =>
                        <Select
                            id={category}
                            data={categories}
                            multi={false}
                            field={field}
                            errors={error}
                        />
                    }
                />

                <ErrorMessage name={'children_category'}
                    errors={errors}
                    render={({ message }) => <InputError message={message} />}
                />
            </div>
        </form>
    )
}

export default CategoriesForm