import React, {FC, useState} from 'react';
import "./UploadFile.scss";
import {FieldError} from "react-hook-form";

interface UploadFilePropsType {
    props: any,
    error?: FieldError,
    id: string
    defaultValue?: any
    mode: any,
    setValue: any
}

const UploadFile: FC<UploadFilePropsType> = ({props, error, id, defaultValue, mode, setValue}) => {
    const [uploadedPhotos, setUploadedPhotos] = useState<any>([]);
    const [photoPreview, setPhotoPreview] = useState<any>([]);

    const handleUpload = (e: any) => {
        console.log(e.target.files)
        const files = e.target.files[0];
        setUploadedPhotos([...uploadedPhotos, files]);
        setPhotoPreview(
            uploadedPhotos.map((photo: any) =>
                Object.assign(photo, {
                    preview: URL.createObjectURL(photo)
                })
            )
        );
        setValue(uploadedPhotos)
    };

    return (
        <div className="uploadFile">
            <div className="uploadFile__choose">
                <label htmlFor={id} className="uploadFile__label input-text">выбрать картинку</label>
                <input type="file"
                       id={id}
                       className="input-style"
                       accept="image/png, image/jpeg"
                       multiple={true}
                       hidden={true}
                       onChange={handleUpload}
                       onBlur={mode}
                       {...props}
                />

                {
                    photoPreview.map((photo: any) =>
                        <div className="uploadFile__img">
                            <img src={photo} alt={photo.preview}/>
                        </div>
                    )
                }
            </div>

            <div className="uploadFile__info">
                <div className="uploadFile__name input-text">{photoPreview.map((item: any) => item.name)}</div>
                <div className="uploadFile__delete" onClick={() => {
                    setPhotoPreview('');
                }}></div>
            </div>
        </div>
    );
};

export default UploadFile;