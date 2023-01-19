import React, {FC} from 'react';
import "./InputError.scss";

interface InputErrorPropsType {
    message?: string
}

const InputError: FC<InputErrorPropsType> = ({message}) => {
    return (
        <span className="input-error">{message}</span>
    );
};

export default InputError;