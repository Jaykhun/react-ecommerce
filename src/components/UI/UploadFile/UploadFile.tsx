import {Swiper, SwiperSlide} from "swiper/react";
import UploadFileItem from "./UploadFileItem";
import {FC, useState} from 'react';
import {v4 as keyId} from "uuid"
import {Navigation} from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "./UploadFile.scss";

interface UploadFilePropsType {
    error?: any,
    id: string
    defaultValue?: any
    name: string,
    onBlur?: any,
    onChange?: any,
    value?: string
    props: any,
    isMulti: boolean
}

export interface Image {
    name: string,
    url: string
}

const UploadFile: FC<UploadFilePropsType> = ({error, id, defaultValue, name, props, isMulti}) => {
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
            {images.length === 0 &&
                <div className="uploadFile__choose">
                    <label htmlFor={id} className="uploadFile__label input-text">выбрать картинку</label>
                    <input type="file"
                           id={id}
                           name={name}
                           className="input-style"
                           accept="image/png, image/jpeg"
                           multiple={isMulti}
                           hidden={true}
                           onChange={handleChange}
                    />
                </div>}

            {images &&
                <div className="uploadFile__images">
                    <Swiper navigation={true} modules={[Navigation]} className="uploadFile__swiper">
                        {images.map(item =>
                            <SwiperSlide className='uploadFile__item' key={keyId()}>
                                <UploadFileItem image={item} images={images} setImg={setImg}/>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            }
        </div>
    );
};

export default UploadFile;