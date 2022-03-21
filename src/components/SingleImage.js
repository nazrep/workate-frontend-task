import  './SingleImage.scss'

export const ImagesGallery = ({url, author}) => {
    return (
        <div className="single-image">
            <img src={url} alt={`work created by ${author}`} />
        </div>
    );
}

export default ImagesGallery;
