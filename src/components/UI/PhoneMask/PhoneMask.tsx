import { FC } from 'react'
import { Controller } from 'react-hook-form'
import { PatternFormat } from 'react-number-format'
import './PhoneMask.scss'

interface PhoneMaskProps {
    control: any,
    props: any
}

const PhoneMask: FC<PhoneMaskProps> = ({ control, props }) => {
    return (
        <Controller
            control={control}
            {...props}
            render={({ field }) => ((
                <PatternFormat prefix='+' format="+(###) ## ### ## ##"
                    type='text' id='phone' className='input__style'
                    onBlur={field.onBlur}
                    onChange={newValue => field.onChange(newValue.target.value)}
                />
            ))}
        />
    )
}

export default PhoneMask