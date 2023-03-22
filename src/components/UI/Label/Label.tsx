import { forwardRef, HTMLProps } from 'react'
import './Label.scss'

type LabelProps = HTMLProps<HTMLLabelElement>

const Label = forwardRef<HTMLLabelElement, LabelProps>(props => (
    <label className='input__label' {...props}>
        {props.children}
    </label>
))

export default Label