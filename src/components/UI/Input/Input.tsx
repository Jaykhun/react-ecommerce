import { forwardRef, HTMLProps } from 'react'
import "./Input.scss"

type InputProps = HTMLProps<HTMLInputElement>

const Input = forwardRef<HTMLLabelElement, InputProps>(props => (
    <input className='input__style' {...props} />
))

export default Input