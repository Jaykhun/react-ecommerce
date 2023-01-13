import React, {useState} from 'react';
import "./UploadFile.scss";

const UploadFile = () => {
    const [image, setImage] = useState('');
    const [fileName, setFileName] = useState('Файл не выбран');

    return (
        <div className="uploadFile">
            <div className="uploadFile__choose">
                <label htmlFor="productImage" className="uploadFile__label input-text">выбрать картинку</label>
                <input type="file" id="productImage" className="input-style"
                       accept="image/*" hidden={true}
                       onChange={({target: {files}}: any) => {
                           files[0] && setFileName(files[0].name)
                           setImage(URL.createObjectURL(files[0]))
                       }}
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
                    setFileName('Файл не выбран');
                }}></div>
            </div>
        </div>
    );
};

export default UploadFile;