import  './SingleImage.scss'

export const ImagesGallery = ({url}) => {
    return (
        <div className="single-image">
            <img src={url} alt="" />
        </div>
    );
}

export default ImagesGallery;
