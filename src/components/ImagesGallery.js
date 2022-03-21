import {useCallback, useState} from 'react';
import {useWindowSize} from '../hooks/getWindowSize';
import SingleImage from './SingleImage';
import './ImagesGallery.scss'

export const ImagesGallery = ({images}) => {
    const DEFAULT_IMAGE_LIMIT = 3;
    const IMAGE_WIDTH_WITH_GAP = 22;
    const [imageLimit, setImageLimit] = useState(DEFAULT_IMAGE_LIMIT)
    const windowSize = useWindowSize();
    const LG_BREAKPOINT = 992;
    const isMobile = windowSize.width <= LG_BREAKPOINT;

    const showNextImages = useCallback(() => {
        setImageLimit(prevState => prevState + DEFAULT_IMAGE_LIMIT)
        if(imageLimit === images.length) {
            resetLimit()
        }
        }, [imageLimit, images.length])

    const resetLimit = () => {
        setImageLimit(DEFAULT_IMAGE_LIMIT)
    }

    const getTranslateAnimation = () => {
        if(isMobile) {
            return `translate(0, -${IMAGE_WIDTH_WITH_GAP * (imageLimit - DEFAULT_IMAGE_LIMIT) }rem)`
        }

        return `translate(-${IMAGE_WIDTH_WITH_GAP * (imageLimit - DEFAULT_IMAGE_LIMIT) }rem, 0)`
    }

    return (
        <div className="images-gallery">
            <div
                className="images-gallery__container"
                 style={{transform: getTranslateAnimation()}}
            >
                {images.slice(0, imageLimit).map(({id, download_url, author}) => {
                    return (
                        <SingleImage key={id} url={download_url} author={author} />
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
