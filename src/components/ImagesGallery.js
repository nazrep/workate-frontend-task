import {useState} from 'react';
import './ImagesGallery.scss'
import SingleImage from './SingleImage';

export const ImagesGallery = ({images}) => {
    const DEFAULT_IMAGE_LIMIT = 3;
    const [imageLimit, setImageLimit] = useState(DEFAULT_IMAGE_LIMIT)

    const showNextImages = () => {
        if(imageLimit === images.length) {
            resetLimit()
        }

        setImageLimit(prevState => prevState + DEFAULT_IMAGE_LIMIT)
    }

    const resetLimit = () => {
        setImageLimit(DEFAULT_IMAGE_LIMIT)
    }

    return (
        <div className="images-gallery">
            <div className="images-gallery__container">
                {images.slice(imageLimit - DEFAULT_IMAGE_LIMIT, imageLimit).map((image, index) => {
                    return (
                        <SingleImage key={index} image={image} />
                    )
                })}
            </div>
            <div
                className="images-gallery__button"
                role="button"
                tabIndex={0}
                onClick={showNextImages}
                onKeyPress={showNextImages}
            >
                Next
            </div>
        </div>
    );
}

export default ImagesGallery;
