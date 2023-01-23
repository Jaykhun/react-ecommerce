import React, {FC, useState} from 'react';
import "./UploadFile.scss";
import {v4 as keyId} from "uuid"

interface UploadFilePropsType {
    error?: any,
    id: string
    defaultValue?: any
    name: string,
    onBlur?: any,
    onChange?: any,
    value?: string
    props: any
}

interface Image {
    name: string,
    url: string
}

const UploadFile: FC<UploadFilePropsType> = ({error, id, defaultValue, name, props}) => {
    const [images, setImg] = useState<Image[]>([])

    const handleChange = (e: any) => {
        const files: any = e.target.files
        Array.from(files).map((file: any) => {
            const newImg = {
                name: file.name,
                url: URL.createObjectURL(file)
            }
            return setImg(prevState => prevState.concat([newImg]))
        })
    }

    return (
        <div className="uploadFile">
            <div className="uploadFile__choose">
                <label htmlFor={id} className="uploadFile__label input-text">выбрать картинку</label>
                <input type="file"
                       id={id}
                       name={name}
                       className="input-style"
                       accept="image/png, image/jpeg"
                       multiple={true}
                       hidden={true}
                       onChange={handleChange}
                />

                {
                    images && images.map(item =>
                        <div className="uploadFile__img" key={keyId()}>
                            <img src={item.url} alt={item.name}/>
                        </div>
                    )
                }
            </div>

            <div className="uploadFile__info">
                <div className="uploadFile__name input-text">
                    {error
                        ? ''
                        : images.map(item => item.name)
                    }

                </div>
                <div className="uploadFile__delete" onClick={() => {
                    setImg([]);
                }}>
                </div>
            </div>
        </div>
    );
};

export default UploadFile;