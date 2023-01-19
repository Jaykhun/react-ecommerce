import React, {FC} from 'react';
import "./Error.scss";

interface ErrorPropsType {
    error: any
}

const Error: FC<ErrorPropsType> = ({error}) => {
    return (
        <div className="fetching-error">
            {error.status}
        </div>
    );
};

export default Error;