import { Button, Loader, Message } from '@/components/UI'
import { setToken } from '@/helpers/setToken'
import { useServiceActions } from '@/hooks/useServiceActions'
import { LogInType } from '@/models/userServiceType'
import { userLogIn } from '@/service/userService'
import { ErrorMessage } from '@hookform/error-message'
import { Notify } from 'notiflix'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './LogIn.scss'

const LogIn = () => {
  const { changeTokenState } = useServiceActions()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<LogInType>({ mode: 'onBlur' })

  const [logIn, { data: token, isLoading, isSuccess }] = userLogIn.useLogInMutation()

  const VALIDATION_RULES = {
    required: 'Поле обязательно к заполнению',
    minLength: { value: 5, message: 'Минимум 5 символов' },
    maxLength: { value: 20, message: 'Максимум 20 символов' }
  }

  const onSubmit: SubmitHandler<LogInType> = async (data) => {
    try {
      await logIn(data).unwrap()
      Notify.success(`Добро пожаловать ${data.username}`, {
        clickToClose: true,
        fontSize: '15px',
        zindex: 9999
      })
      reset()
      navigate('/admin')
    }

    catch (e: any) {
      Notify.failure(`Пароль или Логин неправильный, статус: ${e.status}`, {
        clickToClose: true,
        fontSize: '15px',
        zindex: 9999
      })
    }
  }

  useEffect(() => {
    if (isSuccess && token) {
      setToken(token.access_token)
      changeTokenState()
    }
  }, [token])

  return (
    <div className='login'>
      <div className="login__body">
        <div className="login__title">Войти</div>
        <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="login__name">
            <label htmlFor='username' className='input__label'>Логин</label>
            <input type='text' id='username' className='input__style'
              {...register('username', VALIDATION_RULES)} />

            <ErrorMessage name='username' errors={errors}
              render={(data) => <Message formError={data.message} />}
            />
          </div>

          <div className="login__password">
            <label htmlFor='password' className='input__label'>Пароль</label>
            <input type='password' id='password' className='input__style'
              {...register('password', VALIDATION_RULES)} />

            <ErrorMessage name='password' errors={errors}
              render={(data) => <Message formError={data.message} />}
            />
          </div>

          <Button hoverEffect>Войти</Button>
        </form>
        {isLoading && <Loader isLoading={isLoading} />}
      </div>
    </div>
  )
}

export default LogIn