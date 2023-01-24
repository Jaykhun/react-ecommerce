import React, {FC} from 'react';
import {Image} from "../UploadFile";
import "./UploadFileItem.scss";

interface UploadFileItemPropsType {
    image: Image,
    images: Image[],
    setImg: any
}

const UploadFileItem: FC<UploadFileItemPropsType> = ({image, images, setImg}) => {
    const {url, name} = image

    const handleDelete = () => {
        const filteredImages = images.filter(img => img.name !== name)
        setImg(filteredImages)
    }

    return (
        <>
            <div className="uploadFile__img">
                <img src={url} alt={name}/>
            </div>

            <div className="uploadFile__info">
                <div className="uploadFile__name input-text">
                    {name}
                </div>
                <div className="uploadFile__delete" onClick={handleDelete}>
                </div>
            </div>
        </>
    );
};

export default UploadFileItem;