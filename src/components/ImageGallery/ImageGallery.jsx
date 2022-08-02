import { ImageList } from "./ImageGallery.styled"

import { ImageGalleryItem } from "./ImageGalleryItem"

export const ImageGallery = ({ listImage, onSelect }) => {
    return (
        <ImageList>
            {listImage.map(({ id, webformatURL, tags, largeImageURL, loading }) => {
                return (
                    <ImageGalleryItem
                        key={id}
                        url={webformatURL}
                        tags={tags}
                        largeUrl={largeImageURL}
                        onSelect={onSelect}
                        loading={loading}
                    />
                )
            })}
        </ImageList>
    )
}