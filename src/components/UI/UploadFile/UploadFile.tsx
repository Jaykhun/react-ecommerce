import React, {FC, useState} from 'react';
import "./UploadFile.scss";
import {FieldError} from "react-hook-form";

interface UploadFilePropsType {
    props: any,
    error?: FieldError,
    setValue: any,
    id: string
}

const UploadFile: FC<UploadFilePropsType> = ({props, error, setValue, id}) => {
    const [image, setImage] = useState('');
    const [fileName, setFileName] = useState(error?.message);

    image && setValue(image)

    return (
        <div className="uploadFile">
            <div className="uploadFile__choose">
                <label htmlFor={id} className="uploadFile__label input-text">выбрать картинку</label>
                <input type="file" id={id} className="input-style"
                       accept="image/*" hidden={true}
                       onChange={({target: {files}}: any) => {
                           files[0] && setFileName(files[0].name)
                           setImage(URL.createObjectURL(files[0]))
                       }}
                       {...props}
                />

                {
                    image &&
                    <div className="uploadFile__img">
                        <img src={image} alt={fileName}/>
                    </div>
                }
            </div>

            <div className="uploadFile__info">
                <div className="uploadFile__name input-text">{fileName}</div>
                <div className="uploadFile__delete" onClick={() => {
                    setImage('');
                    setFileName(error?.message);
                }}></div>
            </div>
        </div>
    );
};

export default UploadFile;