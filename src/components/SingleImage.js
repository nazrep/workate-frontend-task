import  './SingleImage.scss'

export const ImagesGallery = ({image}) => {
    return (
        <div className="single-image">
            <img src={image.download_url} alt={image.author} />
        </div>
    );
}

export default ImagesGallery;
